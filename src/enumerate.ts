export function enumerate<T>(
  start = 0,
  step = 1,
): (_: Iterator<T>) => Iterator<[number, T]> {
  return (iter) => {
    let count = start;

    return {
      next() {
        const result = iter.next();
        if (result.done) return result;

        const value: [number, T] = [count, result.value];
        count += step;

        return {
          ...result,
          value,
        };
      },
    };
  };
}
