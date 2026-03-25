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
    uses: entur/gha-api/.github/workflows/validate.yml@v6
    secrets: inherit
```