import { assertObjectMatch } from "../dev_deps.ts";

import { filter } from "./filter.ts";

Deno.test("filter", () => {
  const a = [0, 1, 2];
  const iter = filter((x: number) => x > 0)(a.values());

  assertObjectMatch(iter.next(), { value: 1 });
  assertObjectMatch(iter.next(), { value: 2 });
  assertObjectMatch(iter.next(), { done: true });
});
