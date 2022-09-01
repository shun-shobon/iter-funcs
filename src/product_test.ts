import { assertEquals } from "../dev_deps.ts";

import { product } from "./product.ts";

Deno.test("product", () => {
  const a = [1, 2, 3, 4, 5];

  assertEquals(product(a.values()), 120);
});
