import { assertObjectMatch } from "../dev_deps.ts";
import { toAsync } from "./toAsync.ts";

import { asyncEnumerate, enumerate } from "./enumerate.ts";

Deno.test("enumerate", () => {
  const a = ["a", "b", "c"];
  const iter = enumerate()(a.values());

  assertObjectMatch(iter.next(), { value: [0, "a"] });
  assertObjectMatch(iter.next(), { value: [1, "b"] });
  assertObjectMatch(iter.next(), { value: [2, "c"] });
  assertObjectMatch(iter.next(), { done: true });
});

Deno.test("asyncEnumerate", async () => {
  const a = ["a", "b", "c"];
  const iter = asyncEnumerate()(toAsync(a.values()));

  assertObjectMatch(await iter.next(), { value: [0, "a"] });
  assertObjectMatch(await iter.next(), { value: [1, "b"] });
  assertObjectMatch(await iter.next(), { value: [2, "c"] });
  assertObjectMatch(await iter.next(), { done: true });
});
