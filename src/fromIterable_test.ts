import { assertObjectMatch } from "../dev_deps.ts";

import { fromIterable } from "./fromIterable.ts";

Deno.test("fromIterable", () => {
  const a = [1, 2, 3];
  const iter = fromIterable(a);

  assertObjectMatch(iter.next(), { value: 1 });
  assertObjectMatch(iter.next(), { value: 2 });
  assertObjectMatch(iter.next(), { value: 3 });
  assertObjectMatch(iter.next(), { done: true });
});
