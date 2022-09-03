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
