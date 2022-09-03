import { assertObjectMatch } from "../dev_deps.ts";

import { toAsync } from "./toAsync.ts";

Deno.test("toAsync", async () => {
  const a = [1, 2, 3];
  const iter = toAsync(a.values());

  assertObjectMatch(await iter.next(), { value: 1 });
  assertObjectMatch(await iter.next(), { value: 2 });
  assertObjectMatch(await iter.next(), { value: 3 });
  assertObjectMatch(await iter.next(), { done: true });
});
