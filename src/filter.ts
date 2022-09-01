import type { Fn } from "./util.ts";

interface Filter<T> extends Iterator<T> {
  iter: Iterator<T>;
  fn: Fn<T, boolean>;
}

export function filter<T>(
  fn: (_: T) => boolean,
): (iter: Iterator<T>) => Filter<T> {
  return (iter) => ({
    iter,
    fn,
    next() {
      while (true) {
        const { done, value } = this.iter.next();
        if (done) return { done, value: undefined };
        if (this.fn(value)) return { done, value };
      }
    },
  });
}
