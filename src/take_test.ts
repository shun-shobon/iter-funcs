import { assertObjectMatch } from "../dev_deps.ts";
import { toAsync } from "./toAsync.ts";

import { asyncTake, take } from "./take.ts";

Deno.test("take", () => {
  const a = [1, 2, 3];
  const iter = take(2)(a.values());

  assertObjectMatch(iter.next(), { value: 1 });
  assertObjectMatch(iter.next(), { value: 2 });
  assertObjectMatch(iter.next(), { done: true });
});

Deno.test("asyncTake", async () => {
  const a = [1, 2, 3];
  const iter = asyncTake(2)(toAsync(a.values()));

  assertObjectMatch(await iter.next(), { value: 1 });
  assertObjectMatch(await iter.next(), { value: 2 });
  assertObjectMatch(await iter.next(), { done: true });
});
