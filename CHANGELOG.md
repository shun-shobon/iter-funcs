# Changelog

## [1.7.0](https://github.com/shun-shobon/iter-funcs/compare/1.6.0...1.7.0) (2022-12-27)


### Features

* Add `stepBy` ([177c754](https://github.com/shun-shobon/iter-funcs/commit/177c754b701673fc6d89b639eb4a99ef78571d2a))
* Add `toArray` ([8ac0aec](https://github.com/shun-shobon/iter-funcs/commit/8ac0aec1c6171adcc57a9347cb7492c8516660ae))


### Bug Fixes

* Fix `main` field of `package.json` ([1e98c8a](https://github.com/shun-shobon/iter-funcs/commit/1e98c8ac9f2fff86368eca2d483017558b9945bf))
* Use `PromiseLike` instead of `Promise` ([feed517](https://github.com/shun-shobon/iter-funcs/commit/feed51725617620b28133ec72b03094e3df04b0c))

## [1.6.0](https://github.com/shun-shobon/iter-funcs/compare/1.5.0...1.6.0) (2022-12-27)


### Features

* Add `nth` ([3fe8ad9](https://github.com/shun-shobon/iter-funcs/commit/3fe8ad98466f10507d05eea9d79e4d06345fc211))

## [1.5.0](https://github.com/shun-shobon/iter-funcs/compare/1.4.0...1.5.0) (2022-09-03)


### Features

* Add `asyncToArray` ([5d04826](https://github.com/shun-shobon/iter-funcs/commit/5d04826145ecd968b30dbc1d3f04c6056a1b9814))
* Add `toAsyncIterable` ([c20355a](https://github.com/shun-shobon/iter-funcs/commit/c20355ad42bc5d6f60e2c8ce1832d27708afa76a))

## [1.4.0](https://github.com/shun-shobon/iter-funcs/compare/1.3.0...1.4.0) (2022-09-03)


### Features

* Add `toAsync` ([814db71](https://github.com/shun-shobon/iter-funcs/commit/814db71b43785a040e3e7566caad37c4d666fa26))
* Add async functions ([6738cbb](https://github.com/shun-shobon/iter-funcs/commit/6738cbb3c326aa83a57035f132e9d9223eeccc2e))

## [1.3.0](https://github.com/shun-shobon/iter-funcs/compare/1.2.0...1.3.0) (2022-09-03)


### Features

* Add `fromIterable` ([7c8455e](https://github.com/shun-shobon/iter-funcs/commit/7c8455e164be70161e11184188e8275ac4b77e5b))
* Add `toIterable` ([805bdb7](https://github.com/shun-shobon/iter-funcs/commit/805bdb748285f7afba8af2e885d4c4f8c1676bc6))

## [1.2.0](https://github.com/shun-shobon/iter-funcs/compare/1.1.0...1.2.0) (2022-09-02)


### Features

* Add `chain` ([a66d8a1](https://github.com/shun-shobon/iter-funcs/commit/a66d8a14e6c43aff354bd6217092111fbb68b5df))
* Add `find` ([60795c7](https://github.com/shun-shobon/iter-funcs/commit/60795c7390a1132842b42d7f89b79cb1f8b7d6cf))
* Add `range` ([48c2736](https://github.com/shun-shobon/iter-funcs/commit/48c2736011d6e16a42749759530ced51c134813f))
* Add `zip` ([4706d3f](https://github.com/shun-shobon/iter-funcs/commit/4706d3faffc398253f258df86f9d535c29e97def))


### Bug Fixes

* Add export `product` to `mod.ts` ([3a2c67a](https://github.com/shun-shobon/iter-funcs/commit/3a2c67a5e5cc256bbe9ff990d6b4a9dd6c27a79b))

## [1.1.0](https://github.com/shun-shobon/iter-funcs/compare/1.0.0...1.1.0) (2022-09-01)


### Features

* Add `product` ([d2343e2](https://github.com/shun-shobon/iter-funcs/commit/d2343e2be32de46bdec8b2662d0fe4c7550de35c))
* Add `sum` ([15ea901](https://github.com/shun-shobon/iter-funcs/commit/15ea901f2264ba98821fe0cd7ec9821f0e43cd1a))


### Bug Fixes

* Add import from `sum.ts` ([97ae59e](https://github.com/shun-shobon/iter-funcs/commit/97ae59e3c4bf7668ba65fae157381f9c61ecbe38))

## 1.0.0 (2022-09-01)


### ⚠ BREAKING CHANGES

* Change `enumerate`, `filter`, `map` function argument from `Iterable<T>` to `Iterator<T>` and return type from `IterableIterator<T>` to `Iterator<T>`

### Features

* Add `all` ([05cae8c](https://github.com/shun-shobon/iter-funcs/commit/05cae8c0f7de8c416cc848d89a19cb2429cc5434))
* Add `any` ([8c87c1b](https://github.com/shun-shobon/iter-funcs/commit/8c87c1bc8a85ef8fe08ee2d4f823ede66847bbd7))
* Add `enumerate` ([c2fdbf7](https://github.com/shun-shobon/iter-funcs/commit/c2fdbf7de8c76fd43e4958d3e9edd4419d5ace6c))
* Add `filter` ([017e3c8](https://github.com/shun-shobon/iter-funcs/commit/017e3c8a86a45053dd12fedb521470cc937fcc11))
* Add `fold` ([871cbf2](https://github.com/shun-shobon/iter-funcs/commit/871cbf2d52f3077db1e74529ed1f3b569e5705f6))
* Add `forEach` ([a4fc875](https://github.com/shun-shobon/iter-funcs/commit/a4fc875ffef2751e2a3a816a7a46b8d14c4af4d7))
* Add `map` ([3bd0611](https://github.com/shun-shobon/iter-funcs/commit/3bd06116a4e07f6984514d8069c8dc9a11ee94ea))
* Add `pipe` ([056e342](https://github.com/shun-shobon/iter-funcs/commit/056e3420144c019ba53bad01b223ebcf02e54f5d))
* Add `reduce` ([a1485f7](https://github.com/shun-shobon/iter-funcs/commit/a1485f78558125afaccc140e969e4ea6c8741b3e))
* Add `skip` ([13e2a62](https://github.com/shun-shobon/iter-funcs/commit/13e2a62a95316b8d8e44115739eee6f990337e25))
* Add `take` ([1aa1a84](https://github.com/shun-shobon/iter-funcs/commit/1aa1a845bd0f33cf1e475733b1b870f18aa685cd))
* Change function signatures ([be2e190](https://github.com/shun-shobon/iter-funcs/commit/be2e19034b04561e8c0ad83e03947a55110cedbd))
* Initialize ([386637f](https://github.com/shun-shobon/iter-funcs/commit/386637fab80d19db6872b90187340ba074130a5c))
* make `pipe` signature more strict ([8ba58e4](https://github.com/shun-shobon/iter-funcs/commit/8ba58e4614db11ab72943e947ad8145e97bd2a22))


### Bug Fixes

* Add `fold` to `mod.ts` ([2071db4](https://github.com/shun-shobon/iter-funcs/commit/2071db4e3152f32d4cf908d96676dc7a108f48e1))
* Add exports ([2f8fb6c](https://github.com/shun-shobon/iter-funcs/commit/2f8fb6caf07c746379c358c859c0ead1058718ea))
