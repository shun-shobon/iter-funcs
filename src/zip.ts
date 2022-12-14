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

export function asyncZip<T, U>(
  b: AsyncIterator<U>,
): (_: AsyncIterator<T>) => AsyncIterator<[T, U]> {
  return (a) => {
    return {
      async next() {
        const [aResult, bResult] = await Promise.all([a.next(), b.next()]);
        if (aResult.done) return aResult;
        if (bResult.done) return bResult;

        const value: [T, U] = [aResult.value, bResult.value];
        return { done: false, value };
      },
    };
  };
}
