import { fold } from "./fold.ts";

export function product<T>(iter: Iterator<number>): number {
  return fold((acc: number, x: number) => acc * x)(1)(iter);
}
