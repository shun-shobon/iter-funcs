import { type MaybePromise } from "./utils.ts";

export function forEach<T>(
  fn: (value: T) => void,
): (_: Iterator<T>) => void {
  return (iter) => {
    while (true) {
      const result = iter.next();
      if (result.done) return;
      fn(result.value);
    }
  };
}

export function asyncForEach<T>(
  fn: (value: T) => MaybePromise<unknown>,
): (_: AsyncIterator<T>) => Promise<void> {
  return async (iter) => {
    while (true) {
      const result = await iter.next();
      if (result.done) return;
      await fn(result.value);
    }
  };
}
