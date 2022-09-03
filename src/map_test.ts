import { assertObjectMatch } from "../dev_deps.ts";
import { toAsync } from "./toAsync.ts";

import { asyncMap, map } from "./map.ts";

Deno.test("map", () => {
  const a = [1, 2, 3];
  const iter = map((x: number) => x * 2)(a.values());

  assertObjectMatch(iter.next(), { value: 2 });
  assertObjectMatch(iter.next(), { value: 4 });
  assertObjectMatch(iter.next(), { value: 6 });
  assertObjectMatch(iter.next(), { done: true });
});

Deno.test("asyncMap", async () => {
  const a = [1, 2, 3];
  const iter = asyncMap((x: number) => Promise.resolve(x * 2))(
    toAsync(a.values()),
  );

  assertObjectMatch(await iter.next(), { value: 2 });
  assertObjectMatch(await iter.next(), { value: 4 });
  assertObjectMatch(await iter.next(), { value: 6 });
  assertObjectMatch(await iter.next(), { done: true });
});
