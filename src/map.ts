interface Map<T, U> extends Iterator<U> {
  iter: Iterator<T>;
  fn: (_: T) => U;
}

export function map<T, U>(
  fn: (_: T) => U,
): (_: Iterator<T>) => Map<T, U> {
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
