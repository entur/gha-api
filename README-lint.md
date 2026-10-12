# `gha-api/lint`

Lint an OpenAPI specification according to [Enturs API guidelines](https://github.com/entur/api-guidelines).

## Inputs

<!-- AUTO-DOC-INPUT:START - Do not remove or modify this section -->

|                                      INPUT                                       |  TYPE   | REQUIRED |  DEFAULT  |                                                      DESCRIPTION                                                      |
|----------------------------------------------------------------------------------|---------|----------|-----------|-----------------------------------------------------------------------------------------------------------------------|
|        <a name="input_annotations"></a>[annotations](#input_annotations)         | string  |  false   |  `"all"`  | Annotate files with lint problems. <br>Accepted values: all (annotate all files), none <br>(dont annotate any files)  |
|             <a name="input_artifact"></a>[artifact](#input_artifact)             | string  |  false   |           |                                    Artifact containing the OpenAPI specification.                                     |
|    <a name="input_fail_threshold"></a>[fail_threshold](#input_fail_threshold)    | string  |  false   | `"never"` |                     The threshold to fail the <br>build. Accepted values: warn, error, <br>never                      |
|                   <a name="input_path"></a>[path](#input_path)                   | string  |  false   |           |                                             Path to OpenAPI specification                                             |
| <a name="input_upload_to_bucket"></a>[upload_to_bucket](#input_upload_to_bucket) | boolean |  false   |  `true`   |                         If true, will upload the <br>spec to a GCS bucket <br>for analytics.                          |

<!-- AUTO-DOC-INPUT:END -->

## Outputs

<!-- AUTO-DOC-OUTPUT:START - Do not remove or modify this section -->
No outputs.
<!-- AUTO-DOC-OUTPUT:END -->

## Secrets

<!-- AUTO-DOC-SECRETS:START - Do not remove or modify this section -->

|                        SECRET                        | REQUIRED |                                                     DESCRIPTION                                                      |
|--------------------------------------------------------|----------|-----------------------------------------------------------------------------------------------------------------------|
| <a name="secret_ENTUR_API_DATA_SA"></a>[ENTUR_API_DATA_SA](#secret_ENTUR_API_DATA_SA) |  false   | Google Cloud service account JSON key used to upload <br>linted specs to the analytics GCS bucket. Required only <br>when upload_to_bucket is true (the default). |

<!-- AUTO-DOC-SECRETS:END -->

# Usage

Add the following step to your workflow configuration.
By default, the workflow looks for a specification at `specs/openapi.yaml`.

```yml
#ci.yml

jobs:
  openapi-lint:
    uses: entur/gha-api/.github/workflows/lint.yml@v6
    secrets:
      ENTUR_API_DATA_SA: ${{ secrets.ENTUR_API_DATA_SA }}
```

> [!TIP]
> Pass only the secret the workflow declares (`ENTUR_API_DATA_SA`), rather than `secrets: inherit`, so this workflow (and its dependencies) never gain access to the rest of your repository's secrets. If you don't need bucket analytics, set `upload_to_bucket: false` and omit `secrets:` entirely.

## Specifying path to spec
If your spec is in another file, you can specify it using the `path` input.

```yml
#ci.yml

jobs:
  openapi-lint:
    uses: entur/gha-api/.github/workflows/lint.yml@v6
    with:
      path: specs/openapi.json
    secrets:
      ENTUR_API_DATA_SA: ${{ secrets.ENTUR_API_DATA_SA }}
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
if the workflow detects that it is running on the default branch (on push, or when a pull request targeting it is merged).
This requires the `ENTUR_API_DATA_SA` secret to be passed to the workflow, as shown in [Usage](#usage) above.
To disable this behavior (and skip passing the secret), set the `upload_to_bucket` input to `false`.

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
