import { assertEquals } from "../dev_deps.ts";
import { toAsync } from "./toAsync.ts";

import { asyncFold, fold } from "./fold.ts";

Deno.test("fold", () => {
  const a = [1, 2, 3];
  const sum = fold((acc: number, x: number) => acc + x)(0)(a.values());

  assertEquals(sum, 6);
});

Deno.test("asyncFold", async () => {
  const a = [1, 2, 3];
  const sum = await asyncFold((acc: number, x: number) =>
    Promise.resolve(acc + x)
  )(
    0,
  )(toAsync(a.values()));

  assertEquals(sum, 6);
});
