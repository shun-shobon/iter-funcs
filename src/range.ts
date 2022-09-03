export function range(start: number, end?: number): Iterator<number> {
  let count = start;

  return {
    next() {
      if (end !== undefined && count >= end) {
        return { done: true, value: undefined };
      }

      const result = { done: false, value: count };
      count += 1;

      return result;
    },
  };
}
