import { assertEquals } from "../dev_deps.ts";
import { toAsync } from "./toAsync.ts";

import { asyncNth, nth } from "./nth.ts";

Deno.test("find", () => {
  const a = [1, 2, 3];

  assertEquals(nth(1)(a.values()), 2);

  const iter = a.values();
  assertEquals(nth(1)(iter), 2);
  assertEquals(nth(1)(iter), undefined);

  assertEquals(nth(10)(a.values()), undefined);
});

Deno.test("asyncFind", async () => {
  const a = [1, 2, 3];
  const makeIter = () => toAsync(a.values());

  assertEquals(await asyncNth(1)(makeIter()), 2);

  const iter = makeIter();
  assertEquals(await asyncNth(1)(iter), 2);
  assertEquals(await asyncNth(1)(iter), undefined);

  assertEquals(await asyncNth(10)(makeIter()), undefined);
});
