import { type MaybePromise } from "./utils.ts";

export function fold<T, U>(
  fn: (_: U, __: T) => U,
): (_: U) => (_: Iterator<T>) => U {
  return (init) => (iter) => {
    let acc = init;

    while (true) {
      const { done, value } = iter.next();
      if (done) return acc;
      acc = fn(acc, value);
    }
  };
}

export function asyncFold<T, U>(
  fn: (_: U, __: T) => MaybePromise<U>,
): (_: U) => (_: AsyncIterator<T>) => Promise<U> {
  return (init) => async (iter) => {
    let acc = init;

    while (true) {
      const { done, value } = await iter.next();
      if (done) return acc;
      acc = await fn(acc, value);
    }
  };
}
