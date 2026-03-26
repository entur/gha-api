# `gha-api/lint`

Lint an OpenAPI specification according to [Enturs API guidelines](https://github.com/entur/api-guidelines).

## Inputs

<!-- AUTO-DOC-INPUT:START - Do not remove or modify this section -->

|                                        INPUT                                        |  TYPE   | REQUIRED |     DEFAULT      |                                           DESCRIPTION                                            |
|-------------------------------------------------------------------------------------|---------|----------|------------------|--------------------------------------------------------------------------------------------------|
|              <a name="input_artifact"></a>[artifact](#input_artifact)               | string  |  false   |                  |                  OpenAPI specs to lint, as <br>a Github artifact glob pattern.                   |
| <a name="input_artifact_contents"></a>[artifact_contents](#input_artifact_contents) | string  |  false   |      `"*"`       | Glob pattern inside artifacts to <br>include in linting, only used <br>if artifact is provided.  |
|     <a name="input_fail_threshold"></a>[fail_threshold](#input_fail_threshold)      | string  |  false   |    `"never"`     |          The threshold to fail the <br>build. Accepted values: warn, error, <br>never            |
|                    <a name="input_spec"></a>[spec](#input_spec)                     | string  |  false   | `"specs/*.json"` |                          OpenAPI specs to lint, as <br>a glob pattern.                           |
|  <a name="input_upload_to_bucket"></a>[upload_to_bucket](#input_upload_to_bucket)   | boolean |  false   |      `true`      |             If true, will upload the <br>spec(s) to a GCS bucket <br>for analytics.              |

<!-- AUTO-DOC-INPUT:END -->

## Outputs

<!-- AUTO-DOC-OUTPUT:START - Do not remove or modify this section -->
No outputs.
<!-- AUTO-DOC-OUTPUT:END -->

# Usage

Add the following step to your workflow configuration.
By default, the workflow looks for a specification at `specs/openapi.yaml`.

```yml
#ci.yml

jobs:
  openapi-lint:
    uses: entur/gha-api/.github/workflows/lint.yml@v6
    secrets: inherit
```

## Specifying path to spec
If your spec is in another file, you can specify it using the `path` input.

```yml
#ci.yml

jobs:
  openapi-lint:
    uses: entur/gha-api/.github/workflows/lint.yml@v6
    with:
      path: specs/openapi.json
    secrets: inherit
```

## Using a generated spec

If your spec is generated as part of your workflow, you can specify the artifact name using the `artifact` input.
When `artifact` is specified, `path` should refer to a file inside the artifact, by default `openapi.yaml`.

```yml
jobs:
  openapi-lint:
    uses: entur/gha-api/.github/workflows/lint.yml@v6
    with:
      artifact: myArtifactName
```

## Failing workflow based on linting results

By default, linting never fails your workflow. You can change this behavior by setting the `fail_threshold` input to either `warn` or `error`.
Setting it to `error` will fail the workflow if there are errors, but will not fail on warnings. Setting it to `warn` will fail the workflow if there are any errors or warnings.

```yml
jobs:
  openapi-lint:
    #[...]
    with:
      fail_threshold: warn
```

## Uploading lint results to GCS bucket

By default, the linting result is uploaded to a GCS bucket for statistics purposes,
if the workflow detects that it is running on the main branch.
To disable this behavior, set the `upload_to_bucket` input to `false`.

```yml
jobs:
  openapi-lint:
    #[...]
    with:
      upload_to_bucket: false
```

### For public repositories

Upload to bucket will not work out of the box for public repositories, due to the secret `ENTUR_API_DATA_SA` not being available.
For these repositories, you must ask team plattform to manually add `ENTUR_API_DATA_SA` as a repository secret.
