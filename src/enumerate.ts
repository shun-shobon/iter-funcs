interface Enumerate<T> extends Iterator<[number, T]> {
  iter: Iterator<T>;
  count: number;
  step: number;
}

export function enumerate<T>(
  start = 0,
  step = 1,
): (_: Iterator<T>) => Enumerate<T> {
  return (iter) => ({
    iter,
    count: start,
    step,
    next() {
      const { done, value } = this.iter.next();
      const result: IteratorResult<[number, T]> = done
        ? { done, value: undefined }
        : { done, value: [this.count, value] };
      this.count += this.step;
      return result;
    },
  });
}
