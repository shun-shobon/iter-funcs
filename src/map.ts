import { type MaybePromise } from "./utils.ts";

export function map<T, U>(
  fn: (_: T) => U,
): (_: Iterator<T>) => Iterator<U> {
  return (iter) => ({
    next() {
      const result = iter.next();
      if (result.done) return result;

      return {
        ...result,
        value: fn(result.value),
      };
    },
  });
}

export function asyncMap<T, U>(
  fn: (_: T) => MaybePromise<U>,
): (_: AsyncIterator<T>) => AsyncIterator<U> {
  return (iter) => ({
    async next() {
      const result = await iter.next();
      if (result.done) return result;

      return {
        ...result,
        value: await fn(result.value),
      };
    },
  });
}
