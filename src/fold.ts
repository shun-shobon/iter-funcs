export function fold<T, U>(
  fn: (_: U, __: T) => U,
): (_: U) => (_: Iterator<T>) => U {
  return (acc) => (iter) => {
    while (true) {
      const { done, value } = iter.next();
      if (done) return acc;
      acc = fn(acc, value);
    }
  };
}
