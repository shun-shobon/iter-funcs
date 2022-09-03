import { assertEquals } from "../dev_deps.ts";

import { toIterable } from "./toIterable.ts";

Deno.test("toIterable", () => {
  const a = [1, 2, 3];
  const b: Array<number> = [];

  for (const i of toIterable(a.values())) {
    b.push(i);
  }

  assertEquals(b, [1, 2, 3]);
});
