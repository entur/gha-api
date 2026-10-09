# `gha-api/publish`

Publish an OpenAPI specification to [Enturs developer documentation](https://developer.entur.no).


> [!TIP]
> `gha-api/publish` is usually called in your deployment workflow. If you want to validate that `gha-api/publish` will work before you merge a pull request, use [`gha-api/validate`](README-validate.md) in your integration workflow.
## Inputs

<!-- AUTO-DOC-INPUT:START - Do not remove or modify this section -->

|                          INPUT                           |  TYPE   | REQUIRED | DEFAULT |                                           DESCRIPTION                                           |
|----------------------------------------------------------|---------|----------|---------|-------------------------------------------------------------------------------------------------|
| <a name="input_artifact"></a>[artifact](#input_artifact) | string  |  false   |         |                         Artifact containing the OpenAPI specification.                          |
|     <a name="input_draft"></a>[draft](#input_draft)      | boolean |  false   | `false` | Publish as draft. Read more <br>in [README-publish.md](../README-publish.md#publish-as-draft).  |
|        <a name="input_env"></a>[env](#input_env)         | string  |  false   | `"prd"` |                 The environment to operate against. <br>dev|prd. Default: prd                   |
|       <a name="input_path"></a>[path](#input_path)       | string  |  false   |         |                                  Path to OpenAPI specification                                  |

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

## Publish as draft

Set the `draft` input to `true` to upload the specification as a draft. The latest draft version of a specification is used as the base for change detection in [validate.yml](./README-validate.md#api-change-detection). See [Golden path](.github/README.md#golden-path) for how to use the workflows together.

```yml
#cd.yml
jobs:
  openapi-publish:
    uses: entur/gha-api/.github/workflows/publish.yml@v6
    with:
      draft: true
```

> [!IMPORTANT]
> This flag should not be confused with the value `draft` for `x-stability-level` ([See API lifecycle guidelines](https://github.com/entur/api-guidelines/blob/main/guidelines.md#25-lifecycle)).
> Setting `draft: true` here means that this version of the API specification is not released yet, not that the API itself is a draft.

