# `gha-api/lint`

Note: OpenAPI specs are linted with Vacuum; AsyncAPI specs use Spectral.

## Inputs

<!-- AUTO-DOC-INPUT:START - Do not remove or modify this section -->

| INPUT                                                                               | TYPE    | REQUIRED | DEFAULT          | DESCRIPTION                                                                                     |
| ----------------------------------------------------------------------------------- | ------- | -------- | ---------------- | ----------------------------------------------------------------------------------------------- |
| <a name="input_artifact"></a>[artifact](#input_artifact)                            | string  | false    |                  | OpenAPI specs to lint, as <br>a Github artifact glob pattern.                                   |
| <a name="input_artifact_contents"></a>[artifact_contents](#input_artifact_contents) | string  | false    | `"*"`            | Glob pattern inside artifacts to <br>include in linting, only used <br>if artifact is provided. |
| <a name="input_fail_threshold"></a>[fail_threshold](#input_fail_threshold)          | string  | false    | `"never"`        | The threshold to fail the <br>build. Accepted values: warn, error, <br>never                    |
| <a name="input_spec"></a>[spec](#input_spec)                                        | string  | false    | `"specs/*.json"` | OpenAPI specs to lint, as <br>a glob pattern.                                                   |
| <a name="input_spec_type"></a>[spec_type](#input_spec_type)                         | string  | false    | `"openapi"`      | The type of spec. Accepted <br>values: openapi, asyncapi                                        |
| <a name="input_upload_to_bucket"></a>[upload_to_bucket](#input_upload_to_bucket)    | boolean | false    | `true`           | If true, will upload the <br>spec(s) to a GCS bucket <br>for analytics.                         |

<!-- AUTO-DOC-INPUT:END -->

## Outputs

<!-- AUTO-DOC-OUTPUT:START - Do not remove or modify this section -->

No outputs.

<!-- AUTO-DOC-OUTPUT:END -->

# Usage

## Golden path

Place your openAPI specs in the `specs` folder in project root.

```sh
λ amazing-app ❯ tree
.
├── README.md
├── specs
    └── spec.json
└── .github
    └── workflows
        └── ci.yml
```

Add the following step to your workflow configuration. By default, the action looks for specs to lint in the `specs` folder.

```yml
#ci.yml

jobs:
  Openapi-lint:
    name: API Lint
    uses: entur/gha-api/.github/workflows/lint.yml@v3
    secrets: inherit
```

## Customizing the specs location in the repository

If your specs are located in a different folder in your repository, you can specify the path to the specs using the `spec` input.
[Globstar patterns](https://www.linuxjournal.com/content/globstar-new-bash-globbing-option) are supported.

```yml
jobs:
  Openapi-lint:
    #[...]
    with:
      spec: custom/specs/path/*.yaml
```

## Linting specs from a GitHub artifact

If your specs are not in your repository, but in a GitHub artifact, you can specify the artifact name using the `artifact` input.

Optionally, you can also specify a file pattern inside the artifact using `artifact_contents`. [Globstar patterns](https://www.linuxjournal.com/content/globstar-new-bash-globbing-option) are supported.

```yml
jobs:
  Openapi-lint:
    #[...]
    with:
      artifact: myArtifactName
      artifact_contents: "*.yaml"
```

## Failing workflow based on linting results

By default, linting never fails your workflow. You can change this behavior by setting the `fail_threshold` input to either `warn` or `error`.
Setting it to `error` will fail the workflow if there are errors, but will not fail on warnings. Setting it to `warn` will fail the workflow if there are any errors or warnings.

```yml
jobs:
  Openapi-lint:
    #[...]
    with:
      fail_threshold: warn
```

## Uploading lint results to a GCS bucket

By default, the linting result is uploaded to a GCS bucket for statistics purposes.
To disable this behavior, set the `upload_to_bucket` input to `false`.

```yml
jobs:
  Openapi-lint:
    #[...]
    with:
      upload_to_bucket: false
```

### For public repositories

Upload to bucket will not work out of the box for public repositories, due to the secret `ENTUR_API_DATA_SA` not being available.
For these repositories, you must ask team plattform to manually add `ENTUR_API_DATA_SA` as a repository secret.

## Linting asyncapi specs (Beta)

By default, linting assumes an openapi spec. You can also lint asyncapi specs by setting the `spec_type` input to `asyncapi`.
Linting of asyncapi specs has limited support. Linting rules are not complete, and lint result is not uploaded to GCS bucket.

```yml
jobs:
  Openapi-lint:
    #[...]
    with:
      spec_type: asyncapi
```
