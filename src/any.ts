export function any<T>(fn: (_: T) => boolean): (_: Iterator<T>) => boolean {
  return (iter) => {
    while (true) {
      const { done, value } = iter.next();
      if (done) return false;
      if (fn(value)) return true;
    }
  };
}
