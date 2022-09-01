import { assertEquals } from "../dev_deps.ts";

import { enumerate } from "./enumerate.ts";

Deno.test("map", () => {
  const a = ["a", "b", "c"];
  const iter = enumerate()(a);

  assertEquals(iter.next().value, [0, "a"]);
  assertEquals(iter.next().value, [1, "b"]);
  assertEquals(iter.next().value, [2, "c"]);
  assertEquals(iter.next().done, true);
});
