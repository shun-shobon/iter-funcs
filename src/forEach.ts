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
