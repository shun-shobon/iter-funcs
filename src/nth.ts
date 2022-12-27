export function nth<T>(
  n: number,
): (_: Iterator<T>) => T | undefined {
  return (iter) => {
    for (let i = 0; i < n; i++) {
      const { done } = iter.next();
      if (done) return;
    }

    const { value, done } = iter.next();
    if (done) return;
    return value;
  };
}

export function asyncNth<T>(
  n: number,
): (_: AsyncIterator<T>) => Promise<T | undefined> {
  return async (iter) => {
    for (let i = 0; i < n; i++) {
      const { done } = await iter.next();
      if (done) return;
    }

    const { value, done } = await iter.next();
    if (done) return;
    return value;
  };
}
