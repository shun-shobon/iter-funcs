export function map<T, U>(
  f: (_: T) => U,
): (iter: Iterable<T>) => IterableIterator<U> {
  return function* (iter: Iterable<T>): IterableIterator<U> {
    for (const value of iter) {
      yield f(value);
    }
  };
}
