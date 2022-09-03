import { type MaybePromise } from "./utils.ts";

export function filter<T>(
  fn: (_: T) => boolean,
): (_: Iterator<T>) => Iterator<T> {
  return (iter) => ({
    next() {
      while (true) {
        const result = iter.next();
        if (result.done) return result;

        if (fn(result.value)) return result;
      }
    },
  });
}

export function asyncFilter<T>(
  fn: (_: T) => MaybePromise<boolean>,
): (_: AsyncIterator<T>) => AsyncIterator<T> {
  return (iter) => ({
    async next() {
      while (true) {
        const result = await iter.next();
        if (result.done) return result;

        if (await fn(result.value)) return result;
      }
    },
  });
}
