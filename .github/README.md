<h1 align="center">entur/gha-api</h1>

[![Entur/API/CI](https://github.com/entur/gha-api/actions/workflows/ci.yml/badge.svg)](https://github.com/entur/gha-api/actions/workflows/ci.yml)
[![Lint OpenAPI specs](https://github.com/entur/gha-api/actions/workflows/lint.yml/badge.svg)](https://github.com/entur/gha-api/actions/workflows/lint.yml)
[![License](https://img.shields.io/github/license/entur/gha-api)](https://github.com/entur/gha-api)

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
  api-lint:
    uses: entur/gha-api/.github/workflows/lint.yml@v1
```
