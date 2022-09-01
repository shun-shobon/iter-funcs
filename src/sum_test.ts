import { assertEquals } from "../dev_deps.ts";

import { sum } from "./sum.ts";

Deno.test("sum", () => {
  const a = [1, 2, 3, 4, 5];

  assertEquals(sum(a.values()), 15);
});
