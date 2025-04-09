# `gha-api/lint`

## Usage

Add the following step to your workflow configuration:

```yml
jobs:
  docker-lint:
    name: API Lint
    uses: entur/gha-api/.github/workflows/lint.yml@v1
```

## Inputs

<!-- AUTO-DOC-INPUT:START - Do not remove or modify this section -->

|                                         INPUT                                          |  TYPE   | REQUIRED |     DEFAULT      |                                               DESCRIPTION                                                |
|----------------------------------------------------------------------------------------|---------|----------|------------------|----------------------------------------------------------------------------------------------------------|
|        <a name="input_artifact_glob"></a>[artifact_glob](#input_artifact_glob)         | string  |  false   |                  | OpenAPI specs to lint, as <br>a Github artifact glob pattern. <br>Either send in this OR <br>file_glob.  |
| <a name="input_fail_on_lint_error"></a>[fail_on_lint_error](#input_fail_on_lint_error) | boolean |  false   |     `false`      |                            If true, a lint error <br>will fail the workflow.                             |
|              <a name="input_file_glob"></a>[file_glob](#input_file_glob)               | string  |  false   | `"specs/*.json"` |         OpenAPI specs to lint, as <br>a glob pattern. Either send <br>in this OR artifact_glob.          |
|    <a name="input_upload_to_bucket"></a>[upload_to_bucket](#input_upload_to_bucket)    | boolean |  false   |      `true`      |                 If true, will upload the <br>spec(s) to a GCS bucket <br>for analytics                   |

<!-- AUTO-DOC-INPUT:END -->

## Outputs

<!-- AUTO-DOC-OUTPUT:START - Do not remove or modify this section -->
No outputs.
<!-- AUTO-DOC-OUTPUT:END -->

## Secrets

<!-- AUTO-DOC-SECRETS:START - Do not remove or modify this section -->
No secrets.
<!-- AUTO-DOC-SECRETS:END -->
