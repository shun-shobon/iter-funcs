export function skip<T>(
  n: number,
): (_: Iterator<T>) => Iterator<T> {
  return (iter) => {
    let count = 0;

    return {
      next() {
        while (count < n) {
          const result = iter.next();
          if (result.done) return result;
          count += 1;
        }

        return iter.next();
      },
    };
  };
}
