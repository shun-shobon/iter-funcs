import { toAsyncIterable } from "./toIterable.ts";

export async function asyncToArray<T>(
  iter: AsyncIterator<T>,
): Promise<Array<T>> {
  const result: Array<T> = [];

  for await (const value of toAsyncIterable(iter)) {
    result.push(value);
  }

  return result;
}
