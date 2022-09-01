import { assertObjectMatch } from "../dev_deps.ts";

import { enumerate } from "./enumerate.ts";

Deno.test("enumerate", () => {
  const a = ["a", "b", "c"];
  const iter = enumerate()(a.values());

  assertObjectMatch(iter.next(), { value: [0, "a"] });
  assertObjectMatch(iter.next(), { value: [1, "b"] });
  assertObjectMatch(iter.next(), { value: [2, "c"] });
  assertObjectMatch(iter.next(), { done: true });
});
