import { assertObjectMatch } from "../dev_deps.ts";

import { fromAsyncIterable, fromIterable } from "./fromIterable.ts";

Deno.test("fromIterable", () => {
  const a = [1, 2, 3];
  const iter = fromIterable(a);

  assertObjectMatch(iter.next(), { value: 1 });
  assertObjectMatch(iter.next(), { value: 2 });
  assertObjectMatch(iter.next(), { value: 3 });
  assertObjectMatch(iter.next(), { done: true });
});

Deno.test("fromAsyncIterable", async () => {
  const gen = async function* () {
    yield 1;
    yield 2;
    yield 3;
  };
  const iter = fromAsyncIterable(gen());

  assertObjectMatch(await iter.next(), { value: 1 });
  assertObjectMatch(await iter.next(), { value: 2 });
  assertObjectMatch(await iter.next(), { value: 3 });
  assertObjectMatch(await iter.next(), { done: true });
});
