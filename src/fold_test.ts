import { assertEquals } from "../dev_deps.ts";

import { fold } from "./fold.ts";

Deno.test("fold", () => {
  const a = [1, 2, 3];
  const sum = fold((acc: number, x: number) => acc + x)(0)(a.values());

  assertEquals(sum, 6);
});
