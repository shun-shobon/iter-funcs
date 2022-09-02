interface Zip<T, U> extends Iterator<[T, U]> {
  a: Iterator<T>;
  b: Iterator<U>;
}

export function zip<T, U>(
  b: Iterator<U>,
): (_: Iterator<T>) => Zip<T, U> {
  return (a) => ({
    a,
    b,
    next() {
      const { done: aDone, value: a } = this.a.next();
      const { done: bDone, value: b } = this.b.next();
      if (aDone) return { done: aDone, value: a };
      if (bDone) return { done: bDone, value: b };
      return { done: false, value: [a, b] };
    },
  });
}
