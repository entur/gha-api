import * as core from "@actions/core";
import { context } from "@actions/github";
import { RequestError } from "@octokit/request-error";
import { Octokit } from "./main.js";

type GithubIssue = (typeof context)["issue"]

export type IssueComment = {
    marker: string,
    content: string
}


export const sendIssueComment = async (comment: IssueComment, issue: GithubIssue, octokit: Octokit) => {
	const markedContent = comment.content + `\n <!-- ${comment.marker} -->`;
 
	const existingComment = await findIssueComment(comment.marker, issue, octokit);
	try {
		if (existingComment != null) {
			console.log(`Existing comment found, updating. (id=${existingComment?.id}), (repo=${issue.repo}, issue=${issue.number})`)
			await octokit.rest.issues.updateComment({
				comment_id: existingComment.id,
				owner: issue.owner,
				repo: issue.repo,
				issue_number: issue.number,
				body: markedContent
			});
		} else {
			console.log(`No existing comment found, creating new comment in (repo=${issue.repo}, issue=${issue.number}).`)
			const res = await octokit.rest.issues.createComment({
				owner: issue.owner,
				repo: issue.repo,
				issue_number: issue.number,
				body: markedContent
			});
			console.log(`Comment created! (id=${res.data.id})`)
		}
	} catch (error) {
		if (!(error instanceof RequestError)) {
			throw Error(`Failed to create pull request comment for issue: ${issue.number}`, { cause: error });
		}

		if (error.status === 403) {
			core.warning(`Not allowed to create comment for issue: ${issue.number}`);
		} else {
			core.warning(`Failed to create pull request comment for issue: ${issue.number}`);
		}
	}
};

export const removeIssueComment = async (marker: string, issue: GithubIssue, octokit: Octokit) => {
	const comment = await findIssueComment(marker, issue, octokit);

	if (comment != null) {
		try {
			await octokit.rest.issues.deleteComment({
				...issue,
				comment_id: comment.id,
			});
		} catch (_error) {
			core.warning(`Failed to remove comment ${comment.id} for issue: ${issue.number} with marker ${marker}`);
		}
	}
};

const fetchIssueComments = async (issue: GithubIssue, octokit: Octokit) => {
	try {
		const response = await octokit.paginate(
			octokit.rest.issues.listComments,
			{
				owner: issue.owner,
				repo: issue.repo,
				issue_number: issue.number,
			},
			(response) => response.data,
		);

		return response;
	} catch (error) {
		if (!(error instanceof RequestError)) {
			throw Error(`Failed to fetch issue comments for issue: ${issue.number}`, { cause: error });
		}

		if (error.status === 404) {
			core.warning(`No comments found for issue: ${issue.number}`);
			return null;
		}
	}

	return null;
};

const findIssueComment = async (marker: string, issue: GithubIssue, octokit: Octokit) => {
	const comments = await fetchIssueComments(issue, octokit);

	return comments?.find(comment => {
		const isActionComment = comment.user?.login === "github-actions[bot]";
		const commentContainsMarker = comment.body?.includes(`<!-- ${marker} -->`);
		return isActionComment && commentContainsMarker
	})
}
