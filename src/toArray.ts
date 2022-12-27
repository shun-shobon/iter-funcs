import { toAsyncIterable, toIterable } from "./toIterable.ts";

export function toArray<T>(iter: Iterator<T>): Array<T> {
  return [...toIterable(iter)];
}

export async function asyncToArray<T>(
  iter: AsyncIterator<T>,
): Promise<Array<T>> {
  const result: Array<T> = [];

  for await (const value of toAsyncIterable(iter)) {
    result.push(value);
  }

  return result;
}
