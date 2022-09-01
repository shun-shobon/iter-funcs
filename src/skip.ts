interface Skip<T> extends Iterator<T> {
  n: number;
}

export function skip<T>(
  n: number,
): (_: Iterator<T>) => Skip<T> {
  return (iter) => ({
    n,
    next() {
      while (this.n > 0) {
        const result = iter.next();
        if (result.done) return result;
        this.n -= 1;
      }
      return iter.next();
    },
  });
}
