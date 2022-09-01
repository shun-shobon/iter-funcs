import { assert, assertObjectMatch } from "../dev_deps.ts";

import { any } from "./any.ts";

Deno.test("any", () => {
  const a = [1, 2, 3];

  assert(any((x: number) => x > 0)(a.values()));
  assert(!any((x: number) => x > 5)(a.values()));

  const iter = a.values();
  assert(any((x: number) => x !== 2)(iter));
  assertObjectMatch(iter.next(), { value: 2 });
});
