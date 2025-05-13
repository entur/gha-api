<h1 align="center">entur/gha-api</h1>

[![Entur/API/CI](https://github.com/entur/gha-api/actions/workflows/ci.yml/badge.svg)](https://github.com/entur/gha-api/actions/workflows/ci.yml)
[![Lint OpenAPI specs](https://github.com/entur/gha-api/actions/workflows/lint.yml/badge.svg)](https://github.com/entur/gha-api/actions/workflows/lint.yml)
[![License](https://img.shields.io/github/license/entur/gha-api)](https://github.com/entur/gha-api)

## About this Action

This is a github action to help teams in Entur adhere to our [API guidelines](https://github.com/entur/api-guidelines) using spectral to lint the OpenAPI specs of the service

[How to use](https://github.com/entur/gha-api/blob/main/README-lint.md)

## Golden path

- Your openAPI 3.x.x specs in the folder `./specs`

### example

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

```yml
#ci.yml
name: CI

on:
  pull_request:

jobs:
  Openapi-lint:
    uses: entur/gha-api/.github/workflows/lint.yml@v3
    secrets: inherit
```
