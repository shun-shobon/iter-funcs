export function zip<T, U>(
  b: Iterator<U>,
): (_: Iterator<T>) => Iterator<[T, U]> {
  return (a) => {
    return {
      next() {
        const aResult = a.next();
        const bResult = b.next();
        if (aResult.done) return aResult;
        if (bResult.done) return bResult;

        const value: [T, U] = [aResult.value, bResult.value];
        return { done: false, value };
      },
    };
  };
}
