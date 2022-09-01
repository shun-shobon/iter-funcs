import { assertObjectMatch } from "../dev_deps.ts";

import { skip } from "./skip.ts";

Deno.test("skip", () => {
  const a = [1, 2, 3];
  const iter = skip(2)(a.values());

  assertObjectMatch(iter.next(), { value: 3 });
  assertObjectMatch(iter.next(), { done: true });
});
