import { assertObjectMatch } from "../dev_deps.ts";
import { toAsync } from "./toAsync.ts";

import { asyncZip, zip } from "./zip.ts";

Deno.test("zip", () => {
  const a = [1, 2, 3];
  const b = [4, 5, 6];
  const c = [7, 8];

  const iterAB = zip(b.values())(a.values());
  assertObjectMatch(iterAB.next(), { value: [1, 4] });
  assertObjectMatch(iterAB.next(), { value: [2, 5] });
  assertObjectMatch(iterAB.next(), { value: [3, 6] });
  assertObjectMatch(iterAB.next(), { done: true });

  const iterAC = zip(c.values())(a.values());
  assertObjectMatch(iterAC.next(), { value: [1, 7] });
  assertObjectMatch(iterAC.next(), { value: [2, 8] });
  assertObjectMatch(iterAC.next(), { done: true });
});

Deno.test("asyncZip", async () => {
  const a = [1, 2, 3];
  const b = [4, 5, 6];
  const c = [7, 8];

  const iterAB = asyncZip(toAsync(b.values()))(toAsync(a.values()));
  assertObjectMatch(await iterAB.next(), { value: [1, 4] });
  assertObjectMatch(await iterAB.next(), { value: [2, 5] });
  assertObjectMatch(await iterAB.next(), { value: [3, 6] });
  assertObjectMatch(await iterAB.next(), { done: true });

  const iterAC = asyncZip(toAsync(c.values()))(toAsync(a.values()));
  assertObjectMatch(await iterAC.next(), { value: [1, 7] });
  assertObjectMatch(await iterAC.next(), { value: [2, 8] });
  assertObjectMatch(await iterAC.next(), { done: true });
});
