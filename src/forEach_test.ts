import { assertEquals } from "../dev_deps.ts";
import { toAsync } from "./toAsync.ts";

import { asyncForEach, forEach } from "./forEach.ts";

Deno.test("forEach", () => {
  const a = [1, 2, 3];
  const b: number[] = [];

  forEach((x: number) => b.push(x))(a.values());
  assertEquals(b, [1, 2, 3]);
});

Deno.test("asyncForEach", async () => {
  const a = [1, 2, 3];
  const b: number[] = [];

  await asyncForEach((x: number) => Promise.resolve(b.push(x)))(
    toAsync(a.values()),
  );
  assertEquals(b, [1, 2, 3]);
});
