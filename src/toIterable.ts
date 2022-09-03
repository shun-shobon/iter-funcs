export function toIterable<T>(iter: Iterator<T>): Iterable<T> {
  return {
    [Symbol.iterator]() {
      return iter;
    },
  };
}

export function toAsyncIterable<T>(iter: AsyncIterator<T>): AsyncIterable<T> {
  return {
    [Symbol.asyncIterator]() {
      return iter;
    },
  };
}
