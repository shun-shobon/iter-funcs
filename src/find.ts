import { type MaybePromise } from "./utils.ts";

export function find<T>(
  fn: (_: T) => boolean,
): (_: Iterator<T>) => T | undefined {
  return (iter) => {
    while (true) {
      const { value, done } = iter.next();
      if (done) return;
      if (fn(value)) return value;
    }
  };
}

export function asyncFind<T>(
  fn: (_: T) => MaybePromise<boolean>,
): (_: AsyncIterator<T>) => Promise<T | undefined> {
  return async (iter) => {
    while (true) {
      const { value, done } = await iter.next();
      if (done) return;
      if (await fn(value)) return value;
    }
  };
}
