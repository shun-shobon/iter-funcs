# iter-funcs

## About

Utility functions for iterators. Inspired by Rust's
[`std::iter::Iterator`](https://doc.rust-lang.org/std/iter/trait.Iterator.html)
trait. This library uses JavaScript native iterators, so it's compatible with
any library that uses them.

## Difference from `Array.prototype` methods

This library's functions are **lazy**. They don't evaluate the whole iterator at
once. They evaluate only the needed elements. This is useful when you have a
large iterator and you only need a few elements from it.

## Example

```ts
import {
  filter,
  forEach,
  map,
  pipe,
  take,
} from "https://raw.githubusercontent.com/shun-shobon/iter-funcs/master/mod.ts";

const array = [1, 2, 3, 4, 5, 6];

pipe(
  array.values(), // make iterator from array
  filter((x) => x % 2 === 0), // filter even numbers
  map((x) => x * 2), // multiply by 2
  take(2), // take first 2 elements
  forEach(console.log), // => 4, 8
);
```
