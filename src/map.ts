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
