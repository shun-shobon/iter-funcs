import { assertObjectMatch } from "../dev_deps.ts";
import { toAsync } from "./toAsync.ts";

import { asyncSkip, skip } from "./skip.ts";

Deno.test("skip", () => {
  const a = [1, 2, 3];

  const iter = skip(2)(a.values());
  assertObjectMatch(iter.next(), { value: 3 });
  assertObjectMatch(iter.next(), { done: true });

  assertObjectMatch(skip(5)(a.values()).next(), { done: true });
});

Deno.test("asyncSkip", async () => {
  const a = [1, 2, 3];
  const iter = asyncSkip(2)(toAsync(a.values()));

  assertObjectMatch(await iter.next(), { value: 3 });
  assertObjectMatch(await iter.next(), { done: true });

  assertObjectMatch(
    await asyncSkip(5)(toAsync(a.values())).next(),
    { done: true },
  );
});
