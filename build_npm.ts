import { build, emptyDir } from "https://deno.land/x/dnt@0.37.0/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    deno: {
      test: true,
    },
  },
  package: {
    name: "@shun-shobon/iter-funcs",
    // x-release-please-start-version
    version: "1.7.0",
    // x-release-please-end
    description:
      "Utility functions for iterators. Inspired by Rust's `std::iter::Iterator` trait.",
    license: "MIT",
    main: "./script/mod.js",
    unpkg: "./esm/mod.js",
    repository: {
      type: "git",
      url: "git+https://github.com/shun-shobon/iter-funcs.git",
    },
    sideEffects: false,
    keywords: [
      "iter",
      "iterator",
      "functional",
      "functional-programming",
      "utility",
    ],
  },
});

Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");
