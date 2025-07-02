# Changelog

## [4.0.0](https://github.com/entur/gha-api/compare/v3.0.0...v4.0.0) (2025-07-02)


### ⚠ BREAKING CHANGES

* API-406: Replaced input fail_on_lint_error with new fail_threshold  ([#48](https://github.com/entur/gha-api/issues/48))

### Features

* Allows use of ** in spec patterns to match recursive directories ([6f95da7](https://github.com/entur/gha-api/commit/6f95da7ad7917373752cbaef811e6a662dfe3954))
* API-372: Display lint issues in step summary ([a71d023](https://github.com/entur/gha-api/commit/a71d0237de03fde4479c53c2c92862617b7e23e4))
* API-372: Lint results reported via SARIF ([4526c02](https://github.com/entur/gha-api/commit/4526c0272dc5cde73aefbff8bab000fe4815c403))
* API-372: Lint results reported via SARIF ([74fce2a](https://github.com/entur/gha-api/commit/74fce2acd1241ebe5b13171da3145a2f18e23591))
* API-372: Lint results reported via SARIF ([ebdb30f](https://github.com/entur/gha-api/commit/ebdb30fe05706e515c910ad58c3e22cf86576ffe))
* API-372: Lint results reported via SARIF ([c6a50a7](https://github.com/entur/gha-api/commit/c6a50a77cb8e882fc9304951b46f94ba2968e719))
* API-372: Lint results reported via SARIF ([a285015](https://github.com/entur/gha-api/commit/a28501516d7f9a027de8fdebd03a1350802b8807))
* API-372: Lint results reported via SARIF ([a7c1338](https://github.com/entur/gha-api/commit/a7c1338bc0bca92dcf5092e5c03d85df2ff296c6))
* API-372: Lint results reported via SARIF ([94df893](https://github.com/entur/gha-api/commit/94df893c6f046db5b216d6c3ceddd12851120ce7))
* API-372: Lint results reported via SARIF ([2db8fb0](https://github.com/entur/gha-api/commit/2db8fb091b4bbd76d1d46d2060bfb293a1c1ec95))
* API-372: Report linting issues as github checks ([dbcf3f7](https://github.com/entur/gha-api/commit/dbcf3f7d40b1959d1c177fae0b92eeebca3a86cd))
* API-372: Report linting issues as github checks ([82ec3ce](https://github.com/entur/gha-api/commit/82ec3cee5801d6ac23625e7af9a0d6acbefa3f2f))
* API-372: Report linting issues as github checks ([e9d2a48](https://github.com/entur/gha-api/commit/e9d2a4802690335c8ef705e7418d6770d1e0bc14))
* API-372: Uploading lint report in html as GHA artifact ([5942491](https://github.com/entur/gha-api/commit/5942491ee87c131487b3c4bda10c2cd8566edf08))
* API-406: Replaced input fail_on_lint_error with new fail_threshold  ([#48](https://github.com/entur/gha-api/issues/48)) ([c2fcedb](https://github.com/entur/gha-api/commit/c2fcedb3ac063a6b2b47bc3cea2096a8ccbf4d5f))
* skip lint if dependabot ([e3246fb](https://github.com/entur/gha-api/commit/e3246fb1e502ff814d403236d636a7f9b98e4473))


### Bug Fixes

* added missing permission for release please ([23de049](https://github.com/entur/gha-api/commit/23de049b6613b6c3320257688585752a4771439e))
* API-372: Create title of lint check. We want one check per spec source ([50d627b](https://github.com/entur/gha-api/commit/50d627bd51deb15ff4503fd101ece30e7c0dbab3))
* API-372: Create title of lint check. We want one check per spec source ([b439434](https://github.com/entur/gha-api/commit/b43943487a9b36c17d4e331e4399481dd751aeaa))
* API-372: Create title of lint check. We want one check per spec source ([59b2343](https://github.com/entur/gha-api/commit/59b23433a403cd21dde23b76810672d088b2888a))
* API-372: Create title of lint check. We want one check per spec source ([603d534](https://github.com/entur/gha-api/commit/603d534fbfe9a0fe1545a9f70bbf65cf311359b3))
* API-372: Create title of lint check. We want one check per spec source ([6ef3186](https://github.com/entur/gha-api/commit/6ef318631530cd2c724b52e7786a5b4c92905dd2))
* API-372: Create title of lint check. We want one check per spec source ([681e604](https://github.com/entur/gha-api/commit/681e60416fa40159017f94106aaa9ca104183b43))
* API-372: Create title of lint check. We want one check per spec source ([deca256](https://github.com/entur/gha-api/commit/deca25657e2161965ceb6fbc05ed78319c6eebab))
* API-372: Create title of lint check. We want one check per spec source ([4424ecf](https://github.com/entur/gha-api/commit/4424ecfd6f1b294d8d0aeacc10ed43b5a672d97d))
* API-407 cleanup ([#54](https://github.com/entur/gha-api/issues/54)) ([74f65c7](https://github.com/entur/gha-api/commit/74f65c78986acb440d7ffd100f5a16e3d304a83a))
* comments ([c2eee8e](https://github.com/entur/gha-api/commit/c2eee8e4cebd66526b2e623f563b844cf77e092c))
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
