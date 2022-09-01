import { assertEquals, assertThrows } from "../dev_deps.ts";

import { reduce } from "./reduce.ts";

Deno.test("reduce", () => {
  const findMax = reduce((a: number, b: number) => (a > b ? a : b));

  const a = [10, 20, 5, -23, 0];
  const b: Array<number> = [];

  assertEquals(findMax(a.values()), 20);
  assertThrows(() => findMax(b.values()), TypeError);
});
