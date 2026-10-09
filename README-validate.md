# `gha-api/validate`

Check that an OpenAPI specification is valid and ready to be published using [`gha-api/publish`](README-publish.md).

## Inputs

<!-- AUTO-DOC-INPUT:START - Do not remove or modify this section -->

|                                INPUT                                 |  TYPE  | REQUIRED | DEFAULT |                                                                                                           DESCRIPTION                                                                                                           |
|----------------------------------------------------------------------|--------|----------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|       <a name="input_artifact"></a>[artifact](#input_artifact)       | string |  false   |         |                                                                                         Artifact containing the OpenAPI specification.                                                                                          |
|              <a name="input_env"></a>[env](#input_env)               | string |  false   | `"prd"` |                                                                                 The environment to operate against. <br>dev|prd. Default: prd                                                                                   |
|             <a name="input_path"></a>[path](#input_path)             | string |  false   |         |                                                                                                  Path to OpenAPI specification                                                                                                  |
| <a name="input_show_changes"></a>[show_changes](#input_show_changes) | string |  false   | `"all"` | Should the workflow create a <br>PR comment showing the changes <br>made to the specification? Values: <br>"all": Show all changes. "breaking": <br>Only show breaking changes. "none": <br>Don't show changes. Default: "all"  |

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

## API change detection
The workflow detects and validates the changes that are made to a specification in the current PR, and summarizes the changes in a comment.
To configure this functionality, use the input `show_changes`.

```yml
#ci.yml
jobs:
  openapi-validate:
    uses: entur/gha-api/.github/workflows/validate.yml@v6
    with:
      show_changes: all
```

- `all` (default value): Creates a comment if there are changes in the API, breaking or non-breaking. Note that purely cosmetic changes, for example to `description` or `examples`, will not be shown.
- `breaking`: Only show changes if they are breaking.
- `none`: Never show the comment.

> [!NOTE]
> To use this functionality, you must also upload the specification as a draft in your CD pipeline, in order to have a base to compare with. See [README-publish.md](./README-publish.md#publish-as-draft).