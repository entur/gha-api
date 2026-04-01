<h1 align="center">entur/gha-api</h1>

[![Entur/API/CI](https://github.com/entur/gha-api/actions/workflows/ci.yml/badge.svg)](https://github.com/entur/gha-api/actions/workflows/ci.yml)
[![Lint OpenAPI specs](https://github.com/entur/gha-api/actions/workflows/lint.yml/badge.svg)](https://github.com/entur/gha-api/actions/workflows/lint.yml)
[![Publish OpenAPI specs](https://github.com/entur/gha-api/actions/workflows/publish.yml/badge.svg)](https://github.com/entur/gha-api/actions/workflows/publish.yml)
[![License](https://img.shields.io/github/license/entur/gha-api)](https://github.com/entur/gha-api)

Github reusable workflows to help Entur teams:

- [Lint OpenAPI specs](../README-lint.md)
- [Validate OpenAPI specs](../README-validate.md)
- [Publish OpenAPI specs to the developer portal](../README-publish.md)

## Golden Path

### Example

Let's look at an example. Our repo is called amazing-app, and it contains an OpenAPI specification at `specs/openapi.yaml`.

```sh
λ amazing-app ❯ tree
.
├── README.md
├── specs
    └── openapi.yaml
└── .github
    └── workflows
        ├── ci.yml
        └── cd.yml
```

Lint and validate the spec in the CI workflow:

```yaml
# ci.yml
name: CI

on:
  pull_request:

jobs:
  openapi-lint:
    uses: entur/gha-api/.github/workflows/lint.yml@v6
    secrets: inherit
  openapi-validate:
    uses: entur/gha-api/.github/workflows/validate.yml@v6
    secrets: inherit
```

Lint and publish the spec to the developer portal in the CD workflow:

```yaml
# cd.yml
name: CD

on:
  pull_request:

jobs:
  openapi-lint:
    uses: entur/gha-api/.github/workflows/lint.yml@v6
    secrets: inherit

  helm-deploy:
      uses: entur/gha-helm/.github/workflows/deploy.yml@v1
      with:
        environment: prd

  openapi-publish:
    needs: helm-deploy # Publish specification after deployment to production has suceeded
    uses: entur/gha-api/.github/workflows/publish.yml@v6
    secrets: inherit
```

## Migrating

### v5 -> v6
See an example: https://github.com/entur/notification-channel/pull/400

The main change in v6 is that `gha-api/publish` now publishes specifications to the new [`api-spec-registry`](https://github.com/entur/api-spec-registry), instead of to a GCP bucket. This enables better validation and feedback, as well as laying the groundwork for more exciting functionality. However, it requires a few backwards incompatible changes, described below. If you have problems upgrading, contact us on Slack, `#talk-api`.

#### Update your spec
`info.x-entur-metadata` now has a few mandatory fields. For example:

```yaml
openapi: "3.1.2"
info:
  x-entur-metadata:
    id: items
    owner: team-api
    audience: partner
```
See api-guidelines for more information: https://github.com/entur/api-guidelines/blob/main/guidelines.md#24-entur-metadata.

If you generate your spec from code with Springdoc, you can use [entur-springdoc-starter](https://github.com/entur/entur-springdoc-starter?tab=readme-ov-file#provide-x-entur-metadata) to supply the metadata.

#### Update your workflow calls
- The input parameter `spec` has been renamed to `path`. In addition, it no longer supports globs, so if you have multiple specs in your repository, you need to call the workflow multiple times, for example by using a [matrix strategy](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/run-job-variations). Its default value has been changed from `specs/*.json` to `specs/openapi.yaml`.

- The input parameter `artifact` can no longer be a glob pattern.
- The input parameter `artifact_contents` has been removed. Instead, when specifying `artifact`, the `path` parameter is used to determine which file inside the artifact to use. In this case, the default value is `openapi.yaml`.

- The input parameter `visibility` parameter to `gha-api/publish` has been removed. Instead, use the field `audience` in `info.x-entur-metadata`. Note that the value `"public"` has been renamed to `"open"`.

#### Bundling
All workflows in `gha-api` now run a bundling step using Redocly, so you no longer need to do it yourself before calling the workflows.
