import { assertEquals } from "../dev_deps.ts";
import { toAsync } from "./toAsync.ts";
import { range } from "./range.ts";

import { asyncToArray, toArray } from "./toArray.ts";

Deno.test("toArray", () => {
  const iter = range(1, 4);

  assertEquals(toArray(iter), [1, 2, 3]);
});

Deno.test("asyncToArray", async () => {
  const iter = toAsync(range(1, 4));

  assertEquals(await asyncToArray(iter), [1, 2, 3]);
});
