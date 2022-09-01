import { assert, assertObjectMatch } from "../dev_deps.ts";

import { all } from "./all.ts";

Deno.test("all", () => {
  const a = [1, 2, 3];

  assert(all((x: number) => x > 0)(a.values()));
  assert(!all((x: number) => x > 2)(a.values()));

  const iter = a.values();
  assert(!all((x: number) => x !== 2)(iter));
  assertObjectMatch(iter.next(), { value: 3 });
});
