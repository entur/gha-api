# `gha-api/lint`

## Usage

Add the following step to your workflow configuration:

```yml
jobs:
  Openapi-lint:
    name: API Lint
    uses: entur/gha-api/.github/workflows/lint.yml@v3
```

## Inputs

<!-- AUTO-DOC-INPUT:START - Do not remove or modify this section -->

| INPUT                                                                                  | TYPE    | REQUIRED | DEFAULT          | DESCRIPTION                                                                                     |
| -------------------------------------------------------------------------------------- | ------- | -------- | ---------------- | ----------------------------------------------------------------------------------------------- |
| <a name="input_artifact"></a>[artifact](#input_artifact)                               | string  | false    |                  | OpenAPI specs to lint, as <br>a Github artifact glob pattern.                                   |
| <a name="input_artifact_contents"></a>[artifact_contents](#input_artifact_contents)    | string  | false    | `"*"`            | Glob pattern inside artifacts to <br>include in linting, only used <br>if artifact is provided. |
| <a name="input_fail_on_lint_error"></a>[fail_on_lint_error](#input_fail_on_lint_error) | boolean | false    | `false`          | If true, a lint error <br>will fail the workflow.                                               |
| <a name="input_spec"></a>[spec](#input_spec)                                           | string  | false    | `"specs/*.json"` | OpenAPI specs to lint, as <br>a glob pattern.                                                   |
| <a name="input_upload_to_bucket"></a>[upload_to_bucket](#input_upload_to_bucket)       | boolean | false    | `true`           | If true, will upload the <br>spec(s) to a GCS bucket <br>for analytics.                         |

<!-- AUTO-DOC-INPUT:END -->

## Outputs

<!-- AUTO-DOC-OUTPUT:START - Do not remove or modify this section -->

No outputs.

<!-- AUTO-DOC-OUTPUT:END -->

## Secrets

<!-- AUTO-DOC-SECRETS:START - Do not remove or modify this section -->

No secrets.

<!-- AUTO-DOC-SECRETS:END -->
