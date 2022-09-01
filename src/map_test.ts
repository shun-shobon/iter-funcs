import { assertEquals } from "../dev_deps.ts";

import { map } from "./map.ts";

Deno.test("map", () => {
  const a = [1, 2, 3];
  const iter = map((x: number) => x * 2)(a);

  assertEquals(iter.next().value, 2);
  assertEquals(iter.next().value, 4);
  assertEquals(iter.next().value, 6);
  assertEquals(iter.next().done, true);
});
