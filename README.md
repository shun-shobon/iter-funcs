# iter-funcs

[![npm](https://img.shields.io/npm/v/@shun-shobon/iter-funcs?logo=npm)](https://www.npmjs.com/package/@shun-shobon/iter-funcs)
[![deno](https://img.shields.io/github/v/release/shun-shobon/iter-funcs?label=deno&logo=deno)](https://deno.land/x/iter_funcs)
[![test](https://github.com/shun-shobon/iter-funcs/actions/workflows/test.yml/badge.svg)](https://github.com/shun-shobon/iter-funcs/actions/workflows/test.yml)
[![codecov](https://codecov.io/gh/shun-shobon/iter-funcs/branch/master/graph/badge.svg?token=gwyScwGdCG)](https://codecov.io/gh/shun-shobon/iter-funcs)

## About

Utility functions for iterators. Inspired by Rust's
[`std::iter::Iterator`](https://doc.rust-lang.org/std/iter/trait.Iterator.html)
trait. This library uses JavaScript native iterators, so it's compatible with
any library that uses them.

## Difference from `Array.prototype` methods

This library's functions are **lazy**. They don't evaluate the whole iterator at
once. They evaluate only the needed elements. This is useful when you have a
large iterator and you only need a few elements from it.

## Why not use method chaining?

Method chaining is a common pattern in JavaScript. However, it tends to increase
bundle size. It also makes it difficult to use with other libraries that use
iterators.

## Example

<!-- x-release-please-start-version -->

This is a basic example.

```ts
import {
  filter,
  forEach,
  fromIterable,
  map,
  pipe,
  take,
} from "https://deno.land/x/iter_funcs@1.6.0/mod.ts";

const array = [1, 2, 3, 4, 5, 6];

pipe(
  array,
  fromIterable, // make iterator from iterable
  filter((x) => x % 2 === 0), // filter even numbers
  map((x) => x * 2), // multiply by 2
  take(2), // take first 2 elements
  forEach(console.log), // => 4, 8
);
```

You can also `AsyncIterator`.

```ts
import { expandGlob } from "https://deno.land/std/fs/mod.ts";
import {
  asyncFilter,
  asyncForEach,
  asyncMap,
  asyncTake,
  asyncToArray,
  pipe,
} from "https://deno.land/x/iter_funcs@1.6.0/mod.ts";

const files: Array<string> = await pipe(
  expandGlob("src/*.ts"), // Find all .ts files in src directory
  asyncMap((entry) => entry.path), // Get path from entry
  asyncFilter((path) => !path.endsWith("_test.ts")), // Exclude test files
  asyncTake(2), // Take first 2 elements
  asyncMap((path) => Deno.readTextFile(path)), // Read file content
  asyncToArray, // Convert to array
);
```

<!-- x-release-please-end -->
