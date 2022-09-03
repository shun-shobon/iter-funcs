export function chain<T, U>(
  after: Iterator<U>,
): (_: Iterator<T>) => Iterator<T | U> {
  return (before) => ({
    next() {
      const result = before.next();
      if (result.done) return after.next();

      return result;
    },
  });
}
