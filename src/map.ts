import type { Fn } from "./util.ts";

interface Map<T, U> extends Iterator<U> {
  iter: Iterator<T>;
  fn: Fn<T, U>;
}

export function map<T, U>(
  fn: Fn<T, U>,
): (iter: Iterator<T>) => Map<T, U> {
  return (iter) => ({
    iter,
    fn,
    next() {
      const { done, value } = this.iter.next();
      return done
        ? { done, value: undefined }
        : { done, value: this.fn(value) };
    },
  });
}
