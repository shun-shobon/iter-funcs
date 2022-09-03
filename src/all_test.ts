import { assert, assertObjectMatch } from "../dev_deps.ts";
import { toAsync } from "./toAsync.ts";

import { all, asyncAll } from "./all.ts";

Deno.test("all", () => {
  const a = [1, 2, 3];

  assert(all((x: number) => x > 0)(a.values()));
  assert(!all((x: number) => x > 2)(a.values()));

  const iter = a.values();
  assert(!all((x: number) => x !== 2)(iter));
  assertObjectMatch(iter.next(), { value: 3 });
});

Deno.test("asyncAll", async () => {
  const a = [1, 2, 3];
  const makeIter = () => toAsync(a.values());

  assert(await asyncAll((x: number) => x > 0)(makeIter()));
  assert(!await asyncAll((x: number) => Promise.resolve(x > 2))(makeIter()));

  const iter = makeIter();
  assert(!await asyncAll((x: number) => x !== 2)(iter));
  assertObjectMatch(await iter.next(), { value: 3 });
});
