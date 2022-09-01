export function filter<T>(
  f: (_: T) => boolean,
): (iter: Iterable<T>) => IterableIterator<T> {
  return function* (iter: Iterable<T>): IterableIterator<T> {
    for (const value of iter) {
      if (f(value)) {
        yield value;
      }
    }
  };
}
