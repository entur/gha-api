# `gha-api/lint`

## Usage

Add the following step to your workflow configuration:

```yml
jobs:
  docker-lint:
    name: API Lint
    uses: entur/gha-api/.github/workflows/lint.yml@v1
```

<!-- AUTO-DOC-INPUT:START - Do not remove or modify this section -->

|                                         INPUT                                          |  TYPE   | REQUIRED |                  DEFAULT                  |                    DESCRIPTION                     |
|----------------------------------------------------------------------------------------|---------|----------|-------------------------------------------|----------------------------------------------------|
| <a name="input_fail_on_lint_error"></a>[fail_on_lint_error](#input_fail_on_lint_error) | boolean |  false   |                  `false`                  | If true, a lint error <br>will fail the workflow.  |
|              <a name="input_file_glob"></a>[file_glob](#input_file_glob)               | string  |  false   | `"specs/*.json specs/*.yml specs/*.yaml"` |       which openAPI 3.x file(s) to <br>lint        |
|           <a name="input_skip_upload"></a>[skip_upload](#input_skip_upload)            | boolean |  false   |                  `false`                  |         If true, skip upload-to-bucket job         |

<!-- AUTO-DOC-INPUT:END -->

## Outputs

<!-- AUTO-DOC-OUTPUT:START - Do not remove or modify this section -->
No outputs.
<!-- AUTO-DOC-OUTPUT:END -->

## Secrets

<!-- AUTO-DOC-SECRETS:START - Do not remove or modify this section -->
No secrets.
<!-- AUTO-DOC-SECRETS:END -->
