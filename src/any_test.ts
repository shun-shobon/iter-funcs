import { assert, assertObjectMatch } from "../dev_deps.ts";
import { toAsync } from "./toAsync.ts";

import { any, asyncAny } from "./any.ts";

Deno.test("any", () => {
  const a = [1, 2, 3];

  assert(any((x: number) => x > 0)(a.values()));
  assert(!any((x: number) => x > 5)(a.values()));

  const iter = a.values();
  assert(any((x: number) => x !== 2)(iter));
  assertObjectMatch(iter.next(), { value: 2 });
});

Deno.test("asyncAny", async () => {
  const a = [1, 2, 3];
  const makeIter = () => toAsync(a.values());

  assert(await asyncAny((x: number) => x > 0)(makeIter()));
  assert(!await asyncAny((x: number) => Promise.resolve(x > 5))(makeIter()));

  const iter = makeIter();
  assert(await asyncAny((x: number) => x !== 2)(iter));
  assertObjectMatch(await iter.next(), { value: 2 });
});
