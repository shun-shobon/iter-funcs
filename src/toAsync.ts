export function toAsync<T>(iter: Iterator<T>): AsyncIterator<T> {
  return {
    next() {
      return Promise.resolve(iter.next());
    },
  };
}
