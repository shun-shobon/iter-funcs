import { assertEquals } from "../dev_deps.ts";

import { take } from "./take.ts";

Deno.test("take", () => {
  const a = [1, 2, 3];
  const iter = take(2)(a.values());

  assertEquals(iter.next().value, 1);
  assertEquals(iter.next().value, 2);
  assertEquals(iter.next().done, true);
});
