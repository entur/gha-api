# Changelog

## [2.0.0](https://github.com/entur/gha-api/compare/v1.0.2...v2.0.0) (2025-04-23)


### ⚠ BREAKING CHANGES

* updated input names and descriptions ([#37](https://github.com/entur/gha-api/issues/37))

### Features

* API-321 Lint GitHub Artifact ([f6f5398](https://github.com/entur/gha-api/commit/f6f5398926308467b24353b1aaf869877931a867))
* API-321: Added back default to file_glob. Because of this, some checks for non empty file_glob input was changed to check for emmpty artifact_glob, because file_glob is never empty now (unless empty string is sent in). ([34b0cb1](https://github.com/entur/gha-api/commit/34b0cb1c5d73ac4ef2581a34c214458c97dcb21c))
* API-321: Adding functionality for linting parts of an artifact. ([9285ea0](https://github.com/entur/gha-api/commit/9285ea0ae4579d7f0bc1998277ad591714b42cb1))
* API-321: Adding functionality for linting parts of an artifact. ([d2d9ebf](https://github.com/entur/gha-api/commit/d2d9ebffc4cac83f6c3cb468bd762921a8ccc490))
* API-321: Adding functionality for linting parts of an artifact. ([35c644b](https://github.com/entur/gha-api/commit/35c644bdbb1ea2fff852551e84c0857ff34b4010))
* API-321: Adding functionality for linting parts of an artifact. ([40dd24b](https://github.com/entur/gha-api/commit/40dd24b82b30f53fca4506ee86f13fd54907d284))
* API-321: Adding functionality for linting parts of an artifact. ([dc15961](https://github.com/entur/gha-api/commit/dc1596134d6cf0aee54e4337e2638e79c4daddd7))
* API-321: Adding functionality for linting parts of an artifact. ([687d587](https://github.com/entur/gha-api/commit/687d587dc52e88f18b0bf64c9021a98b8de6364a))
* API-321: Adding functionality for linting parts of an artifact. ([66f839d](https://github.com/entur/gha-api/commit/66f839d5b6cf1911d9450ffc1f92d4d41b60374e))
* API-321: Adding functionality for linting parts of an artifact. ([b9424ca](https://github.com/entur/gha-api/commit/b9424ca474e61a8f97afe029b39a86e77b8b65f8))
* API-321: Adding functionality for linting parts of an artifact. ([9352830](https://github.com/entur/gha-api/commit/9352830481e403a93822e932617a3476a532e5f2))
* API-321: Adding support for linting spec from github artifact ([a156172](https://github.com/entur/gha-api/commit/a156172b9342d0aca0fdca907cd104d70cfb1a97))
* API-321: Adding support for linting spec from github artifact ([3d2c3d5](https://github.com/entur/gha-api/commit/3d2c3d5b70ecdb0a3a94834c328da19775546a52))
* API-321: Adding support for linting spec from github artifact ([893e8f1](https://github.com/entur/gha-api/commit/893e8f18659806fa3fd10c4fcf4530afc78093ed))
* API-321: Adding support for linting spec from github artifact ([f1404b6](https://github.com/entur/gha-api/commit/f1404b67f44b0bea33e7bd9f34681caf25f7da2f))
* API-321: Adding support for linting spec from github artifact ([b0b588d](https://github.com/entur/gha-api/commit/b0b588d1ce380667296a72f3d31cc38aa5077bcc))
* API-321: Adding support for linting spec from github artifact ([b26161e](https://github.com/entur/gha-api/commit/b26161ee424beb157a0c53e827302a8f50a34d89))
* API-321: Adding support for linting spec from github artifact ([39bd854](https://github.com/entur/gha-api/commit/39bd854c588f481359a7ed27965dcebaa89f4bed))
* API-321: Adding support for linting spec from github artifact ([797c0ac](https://github.com/entur/gha-api/commit/797c0acc0099d2d41140c267860cff0d906dfbec))
* API-321: Adding support for linting spec from github artifact ([bd009d1](https://github.com/entur/gha-api/commit/bd009d1ab740034e55c6fc7bc6b06e6a367a9a46))
* API-321: Adding support for linting spec from github artifact ([f0fd4c0](https://github.com/entur/gha-api/commit/f0fd4c09f131c47441fca6dff09673e9264aadbc))
* API-321: Adding support for linting spec from github artifact ([8e977be](https://github.com/entur/gha-api/commit/8e977bea7333e32a1197fe36e57310ebfed42814))
* API-321: Adding support for linting spec from github artifact ([4231bb2](https://github.com/entur/gha-api/commit/4231bb2681870e44a9cc8b3dcce0136bca207f28))
* API-321: Adding support for linting spec from github artifact ([0127049](https://github.com/entur/gha-api/commit/01270491e0343df92f275a922a29f3be2f27dccb))
* API-321: Adding support for linting spec from github artifact ([95cb58b](https://github.com/entur/gha-api/commit/95cb58b3446b571b0a4271371158680342d3da28))
* API-321: Adding support for linting spec from github artifact ([f0b03d5](https://github.com/entur/gha-api/commit/f0b03d590322ac71037f5672391cc2c64d49d0d5))
* API-321: Adding support for linting spec from github artifact ([3d8dc8a](https://github.com/entur/gha-api/commit/3d8dc8a2b1b6bfbd951bd025fe0789a2ad423ea4))
* API-321: Adding support for linting spec from github artifact ([0c26889](https://github.com/entur/gha-api/commit/0c268896f5ae6ac333c4355fb39f663b07d55115))
* API-321: Adding support for linting spec from github artifact ([d78cc4c](https://github.com/entur/gha-api/commit/d78cc4cfa160316df1ec1cbae83f53b3723f3c62))
* API-321: Adding support for linting spec from github artifact ([2eba208](https://github.com/entur/gha-api/commit/2eba208120b14caf3dc5b8a9181fb86b082bd143))
* API-321: Adding support for linting spec from github artifact ([e06abd1](https://github.com/entur/gha-api/commit/e06abd15eede6941458297fd66f21a7c9961b24b))
* API-321: Adding support for linting spec from github artifact ([e160ce0](https://github.com/entur/gha-api/commit/e160ce0d2275662dd02cd8a43b04ae6e5307542b))
* API-321: Adding support for linting spec from github artifact ([b66a030](https://github.com/entur/gha-api/commit/b66a030d1b68db88760220c693854bc0197849ca))
* API-321: Adding support for linting spec from github artifact ([5356578](https://github.com/entur/gha-api/commit/53565785e7a9065b8db0a9a031a03d26eb6e1804))
* API-321: Adding support for linting spec from github artifact ([fbbf1b3](https://github.com/entur/gha-api/commit/fbbf1b3136c1498b7c02732d69e8a743d765e623))
* API-321: Adding support for linting spec from github artifact ([7923f29](https://github.com/entur/gha-api/commit/7923f291822b2bebd2ae475fae21abd2d9866990))
* API-321: Adding support for linting spec from github artifact ([ae92da8](https://github.com/entur/gha-api/commit/ae92da87efd6f6c4c6967441ac236ffea017ccc0))
* API-321: Adding support for linting spec from github artifact ([e254fa6](https://github.com/entur/gha-api/commit/e254fa676ddd8f690be2fbe8221ae964063c534a))
* API-321: Adding support for linting spec from github artifact ([6cd0a53](https://github.com/entur/gha-api/commit/6cd0a531439f86df85cdedd8a87c8d03eea8d73d))
* API-321: Adding support for linting spec from github artifact ([8e34379](https://github.com/entur/gha-api/commit/8e343797a500e4336b53c77712705b04c3693d4b))
* API-321: Cleanup ([632b525](https://github.com/entur/gha-api/commit/632b5254c98263e8d581ae07f36e2fb80d3be077))
* API-321: Improved lint tests. ([4f53ed4](https://github.com/entur/gha-api/commit/4f53ed40e46748256f496d59d19ea4700d7e96b1))
* API-321: Improved lint tests. ([2798dd3](https://github.com/entur/gha-api/commit/2798dd399c5fd7d6a7133f68c8e3382ccf48e62a))
* API-321: Improved lint tests. ([9a98cbb](https://github.com/entur/gha-api/commit/9a98cbb686abce816d25850189472d0471b85bc3))
* API-321: Improved lint tests. ([45c6197](https://github.com/entur/gha-api/commit/45c61979ad6ff2ffffa86cb9c9979ea4b6927224))
* API-321: Improved lint tests. ([f0a0c36](https://github.com/entur/gha-api/commit/f0a0c36ac1845031038cf4300f79783680a10fee))
* API-321: Improved lint tests. ([f7b26cc](https://github.com/entur/gha-api/commit/f7b26cc171c46094f05cc0fefba0c9c6e1d29562))
* API-321: Improved lint tests. ([e495950](https://github.com/entur/gha-api/commit/e495950ac5beb754a933b0846bbe53c0b6e35ba4))
* API-321: Improved lint tests. ([9b5e781](https://github.com/entur/gha-api/commit/9b5e7813c2ffe60acc4e54dad822bf6f800bea62))
* API-321: Improved lint tests. ([10beffa](https://github.com/entur/gha-api/commit/10beffaea9ce6d9cc03bd919a691ae23ae2799c8))
* API-321: Improved lint tests. ([6783ee0](https://github.com/entur/gha-api/commit/6783ee0924fc48940a9f167da1d703ba06033ce0))
* API-321: Improved lint tests. ([d9e725a](https://github.com/entur/gha-api/commit/d9e725a171051941905064344122aef6f0eac83d))
* API-321: Improved lint tests. ([81fd52f](https://github.com/entur/gha-api/commit/81fd52f01ea5c47d364c6a57b25c6fcb7a17bba2))
* API-321: Improved lint tests. ([0260f3e](https://github.com/entur/gha-api/commit/0260f3e710112a214448b429974aea3da52d2c66))
* API-321: Improved lint tests. ([cd604fe](https://github.com/entur/gha-api/commit/cd604fe1565a5bf9794989f8ebe8f7b85670506b))
* API-321: Improved lint tests. ([e6c2c36](https://github.com/entur/gha-api/commit/e6c2c368ca8a82ecdbf5f24c7af4bcf3448d30b1))
* API-321: Improved lint tests. ([9579bc4](https://github.com/entur/gha-api/commit/9579bc4f742e20e360732d778b2df0ec57cd9100))
* API-321: Improved lint tests. ([5a5a6b9](https://github.com/entur/gha-api/commit/5a5a6b918cb6538dd9e57e09bac84b79aa167c9d))
* API-321: Improved lint tests. ([112f85b](https://github.com/entur/gha-api/commit/112f85b55f5b1f2bee304457773c0e1729fec812))
* API-321: Improved lint tests. ([3de35a0](https://github.com/entur/gha-api/commit/3de35a0f4bfce97b0ad388f22fe79a67657463b4))
* API-321: Testing that uploading artifact and then linting it works. ([24303bb](https://github.com/entur/gha-api/commit/24303bb54e7a25a50eece500163cc48c5791e0df))
* API-321: testing upload of github artifact ([14c1fb2](https://github.com/entur/gha-api/commit/14c1fb2e257f52ff9e786c87b6eb295f5c97dcaa))
* API-321: testing upload of github artifact ([8ffff60](https://github.com/entur/gha-api/commit/8ffff60fa7d6c7fde35c0ffbefdcde3f36d6f2a7))
* API-321: testing upload of github artifact ([405a288](https://github.com/entur/gha-api/commit/405a288463a34b566047125122846cc50a6a588c))
* API-323: Added codeql config ([93246d6](https://github.com/entur/gha-api/commit/93246d62c8d56dd19be2ef0d2b34cb5501ba6437))
* API-323: Added codeql config ([bae8e93](https://github.com/entur/gha-api/commit/bae8e93ff1ae48f11ee54ee0801264c4c526d132))


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
