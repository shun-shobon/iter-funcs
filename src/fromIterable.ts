export function fromIterable<T>(iterable: Iterable<T>): Iterator<T> {
  return iterable[Symbol.iterator]();
}
