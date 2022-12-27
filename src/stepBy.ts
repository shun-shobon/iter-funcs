export function stepBy<T>(n: number): (_: Iterator<T>) => Iterator<T> {
  return (iter) => {
    let isFirstTake = true;

    return {
      next() {
        if (isFirstTake) {
          isFirstTake = false;
          return iter.next();
        } else {
          for (let i = 0; i < n - 1; i++) {
            const result = iter.next();
            if (result.done) return result;
          }

          return iter.next();
        }
      },
    };
  };
}

export function asyncStepBy<T>(
  n: number,
): (_: AsyncIterator<T>) => AsyncIterator<T> {
  return (iter) => {
    let isFirstTake = true;

    return {
      async next() {
        if (isFirstTake) {
          isFirstTake = false;
          return iter.next();
        } else {
          for (let i = 0; i < n - 1; i++) {
            const result = await iter.next();
            if (result.done) return result;
          }

          return iter.next();
        }
      },
    };
  };
}
