import { assertObjectMatch } from "../dev_deps.ts";

import { zip } from "./zip.ts";

Deno.test("zip", () => {
  const a = [1, 2, 3];
  const b = [4, 5, 6];
  const iter = zip(b.values())(a.values());

  assertObjectMatch(iter.next(), { value: [1, 4] });
  assertObjectMatch(iter.next(), { value: [2, 5] });
  assertObjectMatch(iter.next(), { value: [3, 6] });
  assertObjectMatch(iter.next(), { done: true });
});
