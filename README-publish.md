# `gha-api/publish`

## Inputs

<!-- AUTO-DOC-INPUT:START - Do not remove or modify this section -->

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
  Openapi-publish:
    name: Publish API spec
    uses: entur/gha-api/.github/workflows/publish.yml@v4
    secrets: inherit
```

## Customizing the specs location in the repository

If your specs are located in a different folder in your repository, you can specify the path to the specs using the `spec` input.
[Globstar patterns](https://www.linuxjournal.com/content/globstar-new-bash-globbing-option) are supported.

```yml
jobs:
  Openapi-publish:
    #[...]
    with:
      spec: custom/specs/path/*.yaml
```

## Publishing specs from a GitHub artifact

If your specs are not in your repository, but in a GitHub artifact, you can specify the artifact name using the `artifact` input.

Optionally, you can also specify a file pattern inside the artifact using `artifact_contents`. [Globstar patterns](https://www.linuxjournal.com/content/globstar-new-bash-globbing-option) are supported.

```yml
jobs:
  Openapi-publish:
    #[...]
    with:
      artifact: myArtifactName
      artifact_contents: "*.yaml"
```

## Specifying visibility of API

By default, your API will be publically available, if you wish to change the visibility of your API spec, set visibility to one of

- public (default)
- partner
- internal

```yml
jobs:
  Openapi-publish:
    #[...]
    with:
      visibility: internal
```

### For public repositories

this reusable workflow will not work out of the box for public repositories, due to the secret `ENTUR_API_DATA_SA` not being available.
For these repositories, you must ask team plattform to manually add `ENTUR_API_DATA_SA` as a repository secret.
