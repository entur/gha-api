# Changelog


## [4.2.0](https://github.com/entur/gha-api/compare/v4.1.0...v4.2.0) (2025-08-28)


### Features

* created reusable workflow for uploading spec to dev portal ([#71](https://github.com/entur/gha-api/issues/71)) ([39b038f](https://github.com/entur/gha-api/commit/39b038f000b60ab3238b679273ee9d979fadbba4))

## [4.1.0](https://github.com/entur/gha-api/compare/v4.0.1...v4.1.0) (2025-08-11)


### Features

* added workflow for uploading spec to dev portal ([#64](https://github.com/entur/gha-api/issues/64)) ([78c39f2](https://github.com/entur/gha-api/commit/78c39f2119f030ce862087f64ac6513766f4e7f5))
* API-411: Added support for linting asyncapi specs.  ([#60](https://github.com/entur/gha-api/issues/60)) ([14435b5](https://github.com/entur/gha-api/commit/14435b546188acad8e5b3b97ea86fb5932b7a22c))


### Bug Fixes

* API-433: If spectral fails to run, workflow now fails.  ([#63](https://github.com/entur/gha-api/issues/63)) ([d99a9b2](https://github.com/entur/gha-api/commit/d99a9b2346dc310ce2372231c41e6bb102422856))
* Using latest linting ruleset. ([#67](https://github.com/entur/gha-api/issues/67)) ([506d8b0](https://github.com/entur/gha-api/commit/506d8b0c30e683a4bf5628fd80aa50026f53c36e))

## [4.0.1](https://github.com/entur/gha-api/compare/v4.0.0...v4.0.1) (2025-07-08)


### Bug Fixes

* globs spec path to cp in artifact upload ([#56](https://github.com/entur/gha-api/issues/56)) ([bfeaea0](https://github.com/entur/gha-api/commit/bfeaea0f712363621c7913441289e29e76e469d0))

## [4.0.0](https://github.com/entur/gha-api/compare/v3.0.0...v4.0.0) (2025-07-02)


### ⚠ BREAKING CHANGES

* API-406: Replaced input fail_on_lint_error with new fail_threshold  ([#48](https://github.com/entur/gha-api/issues/48))

### Features

* Allows use of ** in spec patterns to match recursive directories ([6f95da7](https://github.com/entur/gha-api/commit/6f95da7ad7917373752cbaef811e6a662dfe3954))
* API-372: Display lint issues in step summary ([a71d023](https://github.com/entur/gha-api/commit/a71d0237de03fde4479c53c2c92862617b7e23e4))
* skips linting for dependabot PR's ([e3246fb](https://github.com/entur/gha-api/commit/e3246fb1e502ff814d403236d636a7f9b98e4473))


### Bug Fixes

* added missing permission for release please ([23de049](https://github.com/entur/gha-api/commit/23de049b6613b6c3320257688585752a4771439e))
* Do not use context vars in run steps. ([952b5ef](https://github.com/entur/gha-api/commit/952b5ef0e141bbed6f6dabcf2570545ad2102e25))
* Makes globstar fixture meaningfully different from normal star ([7cb7207](https://github.com/entur/gha-api/commit/7cb72075aac6317af445ba6d722123a3c89b5ca1))
* only uploads spec to bucket when pushing to default branch ([ff1cc6e](https://github.com/entur/gha-api/commit/ff1cc6e2efcc14ae134eaad6c08564e6478802e2))


## [3.0.0](https://github.com/entur/gha-api/compare/v2.0.0...v3.0.0) (2025-05-12)


### ⚠ BREAKING CHANGES

* API-383: Using new spectral rules (v 1.0.1) with breaking changes.

### Features

* API-383: Using new spectral rules (v 1.0.1) with breaking changes. ([3c5b263](https://github.com/entur/gha-api/commit/3c5b263508d37defced90184a1f091e08677c9c6))

## [2.0.0](https://github.com/entur/gha-api/compare/v1.0.2...v2.0.0) (2025-04-23)

### ⚠ BREAKING CHANGES

* updated input names and descriptions ([#37](https://github.com/entur/gha-api/issues/37))

### Bug Fixes

* API-321: Removed unused file ([7df05c8](https://github.com/entur/gha-api/commit/7df05c878d3794ab1de57a3591506f97a41e7f3e))
* API-321: Renamed "lint" job to "test-lint-ok-with-artifact" ([410a4e7](https://github.com/entur/gha-api/commit/410a4e731c143f66574d2ee5aaecf4f571bfcc41))

### Documentation

* updated input names and descriptions ([#37](https://github.com/entur/gha-api/issues/37)) ([1b491a3](https://github.com/entur/gha-api/commit/1b491a3af7b950eb1bb4a942abb0e364b1ecaa86))

## [1.0.2](https://github.com/entur/gha-api/compare/v1.0.1...v1.0.2) (2025-04-01)


### Bug Fixes

* removed fileglobs for yaml ([#29](https://github.com/entur/gha-api/issues/29)) ([2dc6afa](https://github.com/entur/gha-api/commit/2dc6afa017788b4a1f6e554a7f8041b13b1d6c56))

## [1.0.1](https://github.com/entur/gha-api/compare/v1.0.0...v1.0.1) (2025-04-01)


### Bug Fixes

* updating input name in ci.yml ([#27](https://github.com/entur/gha-api/issues/27)) ([c99e200](https://github.com/entur/gha-api/commit/c99e2003bab3f1d1e35c8908f66f4e81931a4b9c))

## 1.0.0 (2025-03-31)


### Features

* initial commit ([91bec27](https://github.com/entur/gha-api/commit/91bec27bb47ca0dbfb8a985802bbbec6e9a22697))
