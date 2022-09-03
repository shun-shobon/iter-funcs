import { type MaybePromise } from "./utils.ts";

export function reduce<T>(
  fn: (_: T, __: T) => T,
): (_: Iterator<T>) => T {
  return (iter) => {
    const { value, done } = iter.next();
    if (done) throw new TypeError("Reduce of empty iterator");

    let acc = value;
    while (true) {
      const { value, done } = iter.next();
      if (done) break;
      acc = fn(acc, value);
    }
    return acc;
  };
}

export function asyncReduce<T>(
  fn: (_: T, __: T) => MaybePromise<T>,
): (_: AsyncIterator<T>) => Promise<T> {
  return async (iter) => {
    const { value, done } = await iter.next();
    if (done) throw new TypeError("Reduce of empty iterator");

    let acc = value;
    while (true) {
      const { value, done } = await iter.next();
      if (done) break;
      acc = await fn(acc, value);
    }
    return acc;
  };
}
