import { assertEquals } from "../dev_deps.ts";

import { filter } from "./filter.ts";

Deno.test("map", () => {
  const a = [0, 1, 2];
  const iter = filter((x: number) => x > 0)(a);

  assertEquals(iter.next().value, 1);
  assertEquals(iter.next().value, 2);
  assertEquals(iter.next().done, true);
});
