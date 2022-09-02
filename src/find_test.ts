import { assertEquals, assertObjectMatch } from "../dev_deps.ts";

import { find } from "./find.ts";

Deno.test("find", () => {
  const a = [1, 2, 3];

  assertEquals(find((x) => x === 2)(a.values()), 2);
  assertEquals(find((x) => x === 5)(a.values()), undefined);

  const iter = a.values();
  assertEquals(find((x) => x === 2)(iter), 2);
  assertObjectMatch(iter.next(), { value: 3 });
});
