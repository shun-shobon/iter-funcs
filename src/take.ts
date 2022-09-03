export function take<T>(
  n: number,
): (_: Iterator<T>) => Iterator<T> {
  return (iter) => {
    let count = 0;

    return {
      next() {
        if (count >= n) return { done: true, value: undefined };
        count += 1;

        return iter.next();
      },
    };
  };
}

export function asyncTake<T>(
  n: number,
): (_: AsyncIterator<T>) => AsyncIterator<T> {
  return (iter) => {
    let count = 0;

    return {
      next() {
        if (count >= n) {
          return Promise.resolve({ done: true, value: undefined });
        }
        count += 1;

        return iter.next();
      },
    };
  };
}
