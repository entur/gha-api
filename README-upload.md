# `gha-api/upload`

Upload an OpenAPI specification to Enturs central registry, publishing it to [Enturs developer documentation](https://beta.developer.entur.no).


> [!TIP]
> `gha-api/upload` is usually called in your deployment workflow. If you want to validate that `gha-api/upload` will work before you merge a pull request, use [`gha-api/validate`](README-validate.md) in your integration workflow.
## Inputs

<!-- AUTO-DOC-INPUT:START - Do not remove or modify this section -->

|                          INPUT                           |  TYPE  | REQUIRED | DEFAULT |                          DESCRIPTION                           |
|----------------------------------------------------------|--------|----------|---------|----------------------------------------------------------------|
| <a name="input_artifact"></a>[artifact](#input_artifact) | string |  false   |         |         Artifact containing the OpenAPI specification.         |
|        <a name="input_env"></a>[env](#input_env)         | string |  false   | `"prd"` | The environment to operate against. <br>dev|prd. Default: prd  |
|       <a name="input_path"></a>[path](#input_path)       | string |  false   |         |                 Path to OpenAPI specification                  |

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
  openapi-upload:
    uses: entur/gha-api/.github/workflows/upload.yml@v6
    secrets: inherit
```

## Specifying path to spec
If your spec is in another file, you can specify it using the `path` input.

```yml
#cd.yml

jobs:
  openapi-upload:
    uses: entur/gha-api/.github/workflows/upload.yml@v6
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
  openapi-upload:
    uses: entur/gha-api/.github/workflows/upload.yml@v6
    with:
      artifact: myArtifactName
```
