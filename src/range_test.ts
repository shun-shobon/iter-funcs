import { assertObjectMatch } from "../dev_deps.ts";

import { range } from "./range.ts";

Deno.test("zip", () => {
  const iter = range(0, 3);

  assertObjectMatch(iter.next(), { value: 0 });
  assertObjectMatch(iter.next(), { value: 1 });
  assertObjectMatch(iter.next(), { value: 2 });
  assertObjectMatch(iter.next(), { done: true });
});
