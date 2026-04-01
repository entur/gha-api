# `gha-api/validate`

Check that an OpenAPI specification is valid and ready to be published using [`gha-api/publish`](README-publish.md).

## Inputs

<!-- AUTO-DOC-INPUT:START - Do not remove or modify this section -->

|                          INPUT                           |  TYPE  | REQUIRED | DEFAULT |                  DESCRIPTION                   |
|----------------------------------------------------------|--------|----------|---------|------------------------------------------------|
| <a name="input_artifact"></a>[artifact](#input_artifact) | string |  false   |         | Artifact containing the OpenAPI specification. |
|       <a name="input_path"></a>[path](#input_path)       | string |  false   |         |          Path to OpenAPI specfication          |

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
  openapi-validate:
    uses: entur/gha-api/.github/workflows/validate.yml@v6
    secrets: inherit
```

## Specifying path to spec
If your spec is in another file, you can specify it using the `path` input.

```yml
#ci.yml

jobs:
  openapi-validate:
    uses: entur/gha-api/.github/workflows/validate.yml@v6
    with:
      path: specs/openapi.json
    secrets: inherit
```

## Using a generated spec

If your spec is generated as part of your workflow, you can specify the artifact name using the `artifact` input.
When `artifact` is specified, `path` should refer to a file inside the artifact, by default `openapi.yaml`.

```yml
#ci.yml
jobs:
  openapi-validate:
    uses: entur/gha-api/.github/workflows/validate.yml@v6
    with:
      artifact: myArtifactName
```
