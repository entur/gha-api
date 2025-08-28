<h1 align="center">entur/gha-api</h1>

[![Entur/API/CI](https://github.com/entur/gha-api/actions/workflows/ci.yml/badge.svg)](https://github.com/entur/gha-api/actions/workflows/ci.yml)
[![Lint OpenAPI specs](https://github.com/entur/gha-api/actions/workflows/lint.yml/badge.svg)](https://github.com/entur/gha-api/actions/workflows/lint.yml)
[![Publish OpenAPI specs](https://github.com/entur/gha-api/actions/workflows/publish.yml/badge.svg)](https://github.com/entur/gha-api/actions/workflows/publish.yml)
[![License](https://img.shields.io/github/license/entur/gha-api)](https://github.com/entur/gha-api)

## About these actions

Reusable GitHub Actions to help Entur teams:

- Lint API specs with Spectral (OpenAPI, and AsyncAPI beta)
- Publish OpenAPI specs to the developer portal storage (with visibility control)

## Get started

Lint in your workflow:

```yml
jobs:
  openapi-lint:
    uses: entur/gha-api/.github/workflows/lint.yml@v4
    secrets: inherit
```

[read more](https://github.com/entur/gha-api/blob/main/README-lint.md)

Publish in your workflow:

```yml
jobs:
  openapi-publish:
    uses: entur/gha-api/.github/workflows/publish.yml@v4
    secrets: inherit
```

[read more](https://github.com/entur/gha-api/blob/main/README-publish.md)
