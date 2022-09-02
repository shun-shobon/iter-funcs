export function find<T>(
  fn: (_: T) => boolean,
): (_: Iterator<T>) => T | undefined {
  return (iter) => {
    while (true) {
      const { value, done } = iter.next();
      if (done) return;
      if (fn(value)) return value;
    }
  };
}
