export function enumerate<T>(
  start = 0,
  step = 1,
): (iter: Iterable<T>) => IterableIterator<[number, T]> {
  return function* (iter: Iterable<T>) {
    let i = start;
    for (const value of iter) {
      yield [i, value];
      i += step;
    }
  };
}
