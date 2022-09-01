export function all<T>(fn: (_: T) => boolean): (_: Iterator<T>) => boolean {
  return (iter) => {
    while (true) {
      const { done, value } = iter.next();
      if (done) return true;
      if (!fn(value)) return false;
    }
  };
}
