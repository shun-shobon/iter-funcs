export function fromIterable<T>(iterable: Iterable<T>): Iterator<T> {
  return iterable[Symbol.iterator]();
}

export function fromAsyncIterable<T>(
  iterable: AsyncIterable<T>,
): AsyncIterator<T> {
  return iterable[Symbol.asyncIterator]();
}
