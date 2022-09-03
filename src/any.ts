import { type MaybePromise } from "./utils.ts";

export function any<T>(fn: (_: T) => boolean): (_: Iterator<T>) => boolean {
  return (iter) => {
    while (true) {
      const { done, value } = iter.next();
      if (done) return false;
      if (fn(value)) return true;
    }
  };
}

export function asyncAny<T>(
  fn: (_: T) => MaybePromise<boolean>,
): (_: AsyncIterator<T>) => Promise<boolean> {
  return async (iter) => {
    while (true) {
      const { done, value } = await iter.next();
      if (done) return false;
      if (await fn(value)) return true;
    }
  };
}
