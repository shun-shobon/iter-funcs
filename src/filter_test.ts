import { assertObjectMatch } from "../dev_deps.ts";
import { toAsync } from "./toAsync.ts";

import { asyncFilter, filter } from "./filter.ts";

Deno.test("filter", () => {
  const a = [0, 1, 2];
  const iter = filter((x: number) => x > 0)(a.values());

  assertObjectMatch(iter.next(), { value: 1 });
  assertObjectMatch(iter.next(), { value: 2 });
  assertObjectMatch(iter.next(), { done: true });
});

Deno.test("asyncFilter", async () => {
  const a = [0, 1, 2];
  const f = (x: number) => Promise.resolve(x > 0);
  const iter = asyncFilter(f)(toAsync(a.values()));

  assertObjectMatch(await iter.next(), { value: 1 });
  assertObjectMatch(await iter.next(), { value: 2 });
  assertObjectMatch(await iter.next(), { done: true });
});
