import { assertEquals } from "../dev_deps.ts";
import { pipe } from "./pipe.ts";

Deno.test("pipe", () => {
  const res = pipe(
    [1, 2, 3],
    (x: Array<number>) => x.length,
    (x: number) => x * 2,
    (x: number) => x.toString(),
  );

  assertEquals(res, "6");
});
