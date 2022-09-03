import { assertObjectMatch } from "../dev_deps.ts";
import { toAsync } from "./toAsync.ts";

import { asyncChain, chain } from "./chain.ts";

Deno.test("chain", () => {
  const a = [1, 2, 3];
  const b = [4, 5, 6];
  const iter = chain(b.values())(a.values());

  assertObjectMatch(iter.next(), { value: 1 });
  assertObjectMatch(iter.next(), { value: 2 });
  assertObjectMatch(iter.next(), { value: 3 });
  assertObjectMatch(iter.next(), { value: 4 });
  assertObjectMatch(iter.next(), { value: 5 });
  assertObjectMatch(iter.next(), { value: 6 });
  assertObjectMatch(iter.next(), { done: true });
});

Deno.test("asyncChain", async () => {
  const a = [1, 2, 3];
  const b = [4, 5, 6];
  const iter = asyncChain(toAsync(b.values()))(toAsync(a.values()));

  assertObjectMatch(await iter.next(), { value: 1 });
  assertObjectMatch(await iter.next(), { value: 2 });
  assertObjectMatch(await iter.next(), { value: 3 });
  assertObjectMatch(await iter.next(), { value: 4 });
  assertObjectMatch(await iter.next(), { value: 5 });
  assertObjectMatch(await iter.next(), { value: 6 });
  assertObjectMatch(await iter.next(), { done: true });
});
