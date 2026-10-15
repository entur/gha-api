import * as core from "@actions/core";
import { context, getOctokit } from "@actions/github";
import { sendIssueComment, removeIssueComment } from "./github-issues.js"
import { chain, uniqBy } from "lodash";
import {markdownEscape} from "./utils.js";

type ValidationResult = {
    hasChanges: boolean;
    enturMetadata: {
        id: string,
        owner: string,
        audience: string
    }
    apiInfo: {
        title: string
    }
    pendingChanges: Change[]
}

type Change = {
    id: string;
    text: string;
    operationId: string;
    path: string;
    operation: string;
    level: 3 | 2 | 1 | 0;
}

const SHOW_CHANGES_OPTIONS = ['all', 'breaking', 'none'] as const;
type ShowChanges = typeof SHOW_CHANGES_OPTIONS[number];

export type Octokit = ReturnType<typeof getOctokit>

export async function run() {
	const TOKEN = core.getInput("token");

    const octokit = getOctokit(TOKEN, {})

    const validationResult = parseValidateResponse(core.getInput("validation_result"));
    const showChanges = SHOW_CHANGES_OPTIONS.find(x => x === core.getInput("show_changes"));
    const failOnBreakingChanges = core.getBooleanInput("fail_on_breaking_changes")

    if (showChanges == null) {
        core.error(`show_changes has invalid value ${core.getInput("show_changes")}`)
        return;
    }
    
    const comment = await updatePullRequestComment(validationResult, showChanges, octokit);

    const anyBreakingChanges = validationResult?.pendingChanges.some(c => c.level > 1)
    if (failOnBreakingChanges && anyBreakingChanges) {
        core.setFailed(`Detected breaking changes in ${markdownEscape(validationResult?.apiInfo.title ?? validationResult?.enturMetadata.id ?? "your api")}.${comment != null ? ` See: ${comment.htmlUrl}` : ""}`)
    }
}

const updatePullRequestComment = async (validationResult: ValidationResult | null, showChanges: ShowChanges, octokit: Octokit) => {
	if (context.eventName !== "pull_request") return;

    if (validationResult != null) {
        const commentMarker = `gha-api#${validationResult.enturMetadata.id}`;

        const content = createCommentContent(validationResult, showChanges);
        if (content != null) {
            return await sendIssueComment({ marker: commentMarker, content }, context.issue, octokit);
        } else {
            await removeIssueComment(commentMarker, context.issue, octokit);
        }
    }
};

const parseValidateResponse = (responseString: string): ValidationResult | null => {
    if (responseString == null || responseString.trim().length === 0) return null
   
    const res: ValidationResult = JSON.parse(responseString);

    const validChanges = res.pendingChanges
        // Ensure that the changes we look at have all the fields we need
        // Not quite sure in which scenarios some of them might be null
        .filter(c => c.id != null && c.level != null && c.operationId != null && c.operation != null && c.path != null)
    
    return { ...res, pendingChanges: validChanges }
}

const createCommentContent = (res: ValidationResult, showChanges: ShowChanges): string | null => {
    if (showChanges === 'none') return null;

    const changes = res.pendingChanges.filter(change => showChanges === 'all' || change.level > 1)
    if (changes.length === 0) return null

    const changelist = chain(changes)
        .orderBy(c => [c.level, c.id], ["desc", "asc"])
        .groupBy(c => c.operationId)
        .map((changes) => `## ${markdownEscape(changes[0].operation)} ${markdownEscape(changes[0].path)}\n${changes.map(changeString).join("\n")}`)
        .join("\n")
        .value()
    return `
# API changes in ${markdownEscape(res.apiInfo.title)}\n
<details>
<summary>${changesSummaryHeader(changes, showChanges)}</summary>\n
${changelist}\n
</details>
`
}

const changesSummaryHeader = (changes: Change[], showChanges: "all" | "breaking"): string => {
    const endpoints = uniqBy(changes, c => c.operationId)
    const breaking = changes.filter(c => c.level === 3)
    if (showChanges === "all") {
        return `Changes (${changes.length} change${changes.length != 1 ? "s" : ""} in ${endpoints.length} endpoint${endpoints.length != 1 ? "s" : ""}, ${breaking.length} breaking change${breaking.length != 1 ? "s" : ""})`
    } else {
        return `Changes (${breaking.length} breaking change${breaking.length != 1 ? "s" : ""} in ${endpoints.length} endpoint${endpoints.length != 1 ? "s" : ""})`
    }
}

const changeString = (change: Change): string => {
    switch(change.level) {
        case 3: return `- :exclamation: **${markdownEscape(change.text)} (Breaking)**`
        case 2: return `- :warning: ${markdownEscape(change.text)} (Potentially breaking)`
        default: return `- ${markdownEscape(change.text)}`
    }
}