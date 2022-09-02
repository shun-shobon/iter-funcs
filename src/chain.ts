interface Chain<T, U> extends Iterator<T | U> {
  before: Iterator<T>;
  after: Iterator<U>;
}

export function chain<T, U>(
  after: Iterator<U>,
): (_: Iterator<T>) => Chain<T, U> {
  return (before) => ({
    before,
    after,
    next() {
      const { value, done } = this.before.next();
      if (done) return this.after.next();
      return { value, done };
    },
  });
}
