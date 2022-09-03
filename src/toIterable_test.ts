import { assertEquals } from "../dev_deps.ts";
import { toAsync } from "./toAsync.ts";

import { toAsyncIterable, toIterable } from "./toIterable.ts";

Deno.test("toIterable", () => {
  const a = [1, 2, 3];
  const b: Array<number> = [];

  for (const i of toIterable(a.values())) {
    b.push(i);
  }

  assertEquals(b, [1, 2, 3]);
});

Deno.test("toAsyncIterable", async () => {
  const a = [1, 2, 3];
  const b: Array<number> = [];

  for await (const i of toAsyncIterable(toAsync(a.values()))) {
    b.push(i);
  }

  assertEquals(b, [1, 2, 3]);
});
