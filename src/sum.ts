import { fold } from "./fold.ts";

export function sum<T>(iter: Iterator<number>): number {
  return fold((acc: number, x: number) => acc + x)(0)(iter);
}
