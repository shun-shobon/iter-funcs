interface Range extends Iterator<number> {
  start: number;
  end?: number;
  i: number;
}

export function range(start: number, end?: number): Range {
  return {
    start,
    end,
    i: start,
    next() {
      if (this.end !== undefined && this.i >= this.end) {
        return { done: true, value: undefined };
      }

      const result = { done: false, value: this.i };
      this.i += 1;
      return result;
    },
  };
}
