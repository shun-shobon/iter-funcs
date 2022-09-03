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

export function asyncChain<T, U>(
  after: AsyncIterator<U>,
): (_: AsyncIterator<T>) => AsyncIterator<T | U> {
  return (before) => ({
    async next() {
      const result = await before.next();
      if (result.done) return after.next();

      return result;
    },
  });
}
