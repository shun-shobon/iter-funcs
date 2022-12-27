import { assertObjectMatch } from "../dev_deps.ts";
import { toAsync } from "./toAsync.ts";

import { asyncStepBy, stepBy } from "./stepBy.ts";

Deno.test("skip", () => {
  const a = [0, 1, 2, 3, 4, 5];

  const iter = stepBy(2)(a.values());
  assertObjectMatch(iter.next(), { value: 0 });
  assertObjectMatch(iter.next(), { value: 2 });
  assertObjectMatch(iter.next(), { value: 4 });
  assertObjectMatch(iter.next(), { done: true });
});

Deno.test("asyncSkip", async () => {
  const a = [0, 1, 2, 3, 4, 5];

  const iter = asyncStepBy(2)(toAsync(a.values()));
  assertObjectMatch(await iter.next(), { value: 0 });
  assertObjectMatch(await iter.next(), { value: 2 });
  assertObjectMatch(await iter.next(), { value: 4 });
  assertObjectMatch(await iter.next(), { done: true });
});
