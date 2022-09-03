import { assertEquals, assertObjectMatch } from "../dev_deps.ts";
import { toAsync } from "./toAsync.ts";

import { asyncFind, find } from "./find.ts";

Deno.test("find", () => {
  const a = [1, 2, 3];

  assertEquals(find((x) => x === 2)(a.values()), 2);
  assertEquals(find((x) => x === 5)(a.values()), undefined);

  const iter = a.values();
  assertEquals(find((x) => x === 2)(iter), 2);
  assertObjectMatch(iter.next(), { value: 3 });
});

Deno.test("asyncFind", async () => {
  const a = [1, 2, 3];
  const makeIter = () => toAsync(a.values());

  assertEquals(await asyncFind((x) => Promise.resolve(x === 2))(makeIter()), 2);
  assertEquals(await asyncFind((x) => x === 5)(makeIter()), undefined);

  const iter = makeIter();
  assertEquals(await asyncFind((x) => x === 2)(iter), 2);
  assertObjectMatch(await iter.next(), { value: 3 });
});
