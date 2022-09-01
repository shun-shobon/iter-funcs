export function reduce<T>(
  fn: (_: T, __: T) => T,
): (_: Iterator<T>) => T {
  return (iter) => {
    const { value, done } = iter.next();
    if (done) throw new TypeError("Reduce of empty iterator");

    let acc = value;
    while (true) {
      const { value, done } = iter.next();
      if (done) break;
      acc = fn(acc, value);
    }
    return acc;
  };
}
