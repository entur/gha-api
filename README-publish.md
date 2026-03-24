# `gha-api/publish`

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

## Golden path

Place your OpenAPI specs in the `specs` folder in project root.

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
Call this reusable workflow at the same place where your application is deployed to production.

```yml
#cd.yml

jobs:
  openapi-publish:
    needs: deploy-to-prod #example of the step deploying to production
    name: Publish API spec
    uses: entur/gha-api/.github/workflows/publish.yml@v4
    secrets: inherit
```

## Customizing the specs location in the repository

If your specs are located in a different folder in your repository, you can specify the path to the specs using the `spec` input.
[Globstar patterns](https://www.linuxjournal.com/content/globstar-new-bash-globbing-option) are supported.

```yml
jobs:
  openapi-publish:
    #[...]
    with:
      spec: custom/specs/path/*.yaml
```

## Publishing specs from a GitHub artifact

If your specs are not in your repository, but in a GitHub artifact, you can specify the artifact name using the `artifact` input.

Optionally, you can also specify a file pattern inside the artifact using `artifact_contents`. [Globstar patterns](https://www.linuxjournal.com/content/globstar-new-bash-globbing-option) are supported.

```yml
jobs:
  openapi-publish:
    #[...]
    with:
      artifact: myArtifactName
      artifact_contents: "*.yaml"
```