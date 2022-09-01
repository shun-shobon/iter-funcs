import { assertObjectMatch } from "../dev_deps.ts";

import { take } from "./take.ts";

Deno.test("take", () => {
  const a = [1, 2, 3];
  const iter = take(2)(a.values());

  assertObjectMatch(iter.next(), { value: 1 });
  assertObjectMatch(iter.next(), { value: 2 });
  assertObjectMatch(iter.next(), { done: true });
});
