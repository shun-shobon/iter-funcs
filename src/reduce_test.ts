import { assertEquals, assertRejects, assertThrows } from "../dev_deps.ts";
import { toAsync } from "./toAsync.ts";

import { asyncReduce, reduce } from "./reduce.ts";

Deno.test("reduce", () => {
  const findMax = reduce((a: number, b: number) => (a > b ? a : b));

  const a = [10, 20, 5, -23, 0];
  const b: Array<number> = [];

  assertEquals(findMax(a.values()), 20);
  assertThrows(() => findMax(b.values()), TypeError);
});

Deno.test("asyncReduce", async () => {
  const findMax = asyncReduce((a: number, b: number) =>
    Promise.resolve(a > b ? a : b)
  );

  const a = [10, 20, 5, -23, 0];
  const b: Array<number> = [];

  assertEquals(await findMax(toAsync(a.values())), 20);
  assertRejects(() => findMax(toAsync(b.values())), TypeError);
});
