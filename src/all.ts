import { type MaybePromise } from "./utils.ts";

export function all<T>(fn: (_: T) => boolean): (_: Iterator<T>) => boolean {
  return (iter) => {
    while (true) {
      const { done, value } = iter.next();
      if (done) return true;
      if (!fn(value)) return false;
    }
  };
}

export function asyncAll<T>(
  fn: (_: T) => MaybePromise<boolean>,
): (_: AsyncIterator<T>) => Promise<boolean> {
  return async (iter) => {
    while (true) {
      const { done, value } = await iter.next();
      if (done) return true;
      if (!await fn(value)) return false;
    }
  };
}
