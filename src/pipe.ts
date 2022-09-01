export function pipe<T1>(x: T1): T1;
export function pipe<T1, T2>(x: T1, f1: (_: T1) => T2): T2;
export function pipe<T1, T2, T3>(
  x: T1,
  f1: (_: T1) => T2,
  f2: (_: T2) => T3,
): T3;
export function pipe<T1, T2, T3, T4>(
  x: T1,
  f1: (_: T1) => T2,
  f2: (_: T2) => T3,
  f3: (_: T3) => T4,
): T4;
export function pipe<T1, T2, T3, T4, T5>(
  x: T1,
  f1: (_: T1) => T2,
  f2: (_: T2) => T3,
  f3: (_: T3) => T4,
  f4: (_: T4) => T5,
): T5;
export function pipe<T1, T2, T3, T4, T5, T6>(
  x: T1,
  f1: (_: T1) => T2,
  f2: (_: T2) => T3,
  f3: (_: T3) => T4,
  f4: (_: T4) => T5,
  f5: (_: T5) => T6,
): T6;
export function pipe<T1, T2, T3, T4, T5, T6, T7>(
  x: T1,
  f1: (_: T1) => T2,
  f2: (_: T2) => T3,
  f3: (_: T3) => T4,
  f4: (_: T4) => T5,
  f5: (_: T5) => T6,
  f6: (_: T6) => T7,
): T7;
export function pipe<T1, T2, T3, T4, T5, T6, T7, T8>(
  x: T1,
  f1: (_: T1) => T2,
  f2: (_: T2) => T3,
  f3: (_: T3) => T4,
  f4: (_: T4) => T5,
  f5: (_: T5) => T6,
  f6: (_: T6) => T7,
  f7: (_: T7) => T8,
): T8;
// deno-lint-ignore no-explicit-any
export function pipe(x: any, ...fs: Array<any>): any {
  return fs.reduce((x, f) => f(x), x);
}
