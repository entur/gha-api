# `gha-api/publish`

Publish an OpenAPI specification to [Enturs developer documentation](https://beta.developer.entur.no).

## Inputs

<!-- AUTO-DOC-INPUT:START - Do not remove or modify this section -->

|                                        INPUT                                        |  TYPE  | REQUIRED |     DEFAULT      |                                             DESCRIPTION                                             |
|-------------------------------------------------------------------------------------|--------|----------|------------------|-----------------------------------------------------------------------------------------------------|
|              <a name="input_artifact"></a>[artifact](#input_artifact)               | string |  false   |                  |                  OpenAPI specs to publish, as <br>a GitHub artifact glob pattern.                   |
| <a name="input_artifact_contents"></a>[artifact_contents](#input_artifact_contents) | string |  false   |      `"*"`       | Glob pattern inside artifacts to <br>include in publishing, only used <br>if artifact is provided.  |
|                    <a name="input_spec"></a>[spec](#input_spec)                     | string |  false   | `"specs/*.json"` |                          OpenAPI specs to publish, as <br>a glob pattern.                           |

<!-- AUTO-DOC-INPUT:END -->

## Outputs

<!-- AUTO-DOC-OUTPUT:START - Do not remove or modify this section -->
No outputs.
<!-- AUTO-DOC-OUTPUT:END -->

# Usage
Add the following step to your workflow configuration.
By default, the workflow looks for a specification at `specs/openapi.yaml`.

```yml
#cd.yml

jobs:
  openapi-publish:
    uses: entur/gha-api/.github/workflows/publish.yml@v6
    secrets: inherit
```

## Specifying path to spec
If your spec is in another file, you can specify it using the `path` input.

```yml
#cd.yml

jobs:
  openapi-publish:
    uses: entur/gha-api/.github/workflows/publish.yml@v6
    with:
      path: specs/openapi.json
    secrets: inherit
```

## Using a generated spec

If your spec is generated as part of your workflow, you can specify the artifact name using the `artifact` input.
When `artifact` is specified, `path` should refer to a file inside the artifact, by default `openapi.yaml`.

```yml
#cd.yml
jobs:
  openapi-publish:
    uses: entur/gha-api/.github/workflows/publish.yml@v6
    with:
      artifact: myArtifactName
```
