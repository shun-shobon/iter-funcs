interface Take<T> extends Iterator<T> {
  n: number;
}

export function take<T>(
  n: number,
): (_: Iterator<T>) => Take<T> {
  return (iter) => ({
    n,
    next() {
      if (this.n === 0) return { done: true, value: undefined };
      this.n -= 1;
      return iter.next();
    },
  });
}
