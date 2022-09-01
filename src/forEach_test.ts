import { assertEquals } from "../dev_deps.ts";

import { forEach } from "./forEach.ts";

Deno.test("forEach", () => {
  const a = [1, 2, 3];
  const b: number[] = [];
  forEach((x: number) => b.push(x))(a.values());

  assertEquals(b, [1, 2, 3]);
});
