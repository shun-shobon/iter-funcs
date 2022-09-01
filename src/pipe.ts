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
export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  x: T1,
  f1: (_: T1) => T2,
  f2: (_: T2) => T3,
  f3: (_: T3) => T4,
  f4: (_: T4) => T5,
  f5: (_: T5) => T6,
  f6: (_: T6) => T7,
  f7: (_: T7) => T8,
  f8: (_: T8) => T9,
): T9;
export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  x: T1,
  f1: (_: T1) => T2,
  f2: (_: T2) => T3,
  f3: (_: T3) => T4,
  f4: (_: T4) => T5,
  f5: (_: T5) => T6,
  f6: (_: T6) => T7,
  f7: (_: T7) => T8,
  f8: (_: T8) => T9,
  f9: (_: T9) => T10,
): T10;
export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(
  x: T1,
  f1: (_: T1) => T2,
  f2: (_: T2) => T3,
  f3: (_: T3) => T4,
  f4: (_: T4) => T5,
  f5: (_: T5) => T6,
  f6: (_: T6) => T7,
  f7: (_: T7) => T8,
  f8: (_: T8) => T9,
  f9: (_: T9) => T10,
  f10: (_: T10) => T11,
): T11;
export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(
  x: T1,
  f1: (_: T1) => T2,
  f2: (_: T2) => T3,
  f3: (_: T3) => T4,
  f4: (_: T4) => T5,
  f5: (_: T5) => T6,
  f6: (_: T6) => T7,
  f7: (_: T7) => T8,
  f8: (_: T8) => T9,
  f9: (_: T9) => T10,
  f10: (_: T10) => T11,
  f11: (_: T11) => T12,
): T12;
export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(
  x: T1,
  f1: (_: T1) => T2,
  f2: (_: T2) => T3,
  f3: (_: T3) => T4,
  f4: (_: T4) => T5,
  f5: (_: T5) => T6,
  f6: (_: T6) => T7,
  f7: (_: T7) => T8,
  f8: (_: T8) => T9,
  f9: (_: T9) => T10,
  f10: (_: T10) => T11,
  f11: (_: T11) => T12,
  f12: (_: T12) => T13,
): T13;
export function pipe<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
>(
  x: T1,
  f1: (_: T1) => T2,
  f2: (_: T2) => T3,
  f3: (_: T3) => T4,
  f4: (_: T4) => T5,
  f5: (_: T5) => T6,
  f6: (_: T6) => T7,
  f7: (_: T7) => T8,
  f8: (_: T8) => T9,
  f9: (_: T9) => T10,
  f10: (_: T10) => T11,
  f11: (_: T11) => T12,
  f12: (_: T12) => T13,
  f13: (_: T13) => T14,
): T14;
export function pipe<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
>(
  x: T1,
  f1: (_: T1) => T2,
  f2: (_: T2) => T3,
  f3: (_: T3) => T4,
  f4: (_: T4) => T5,
  f5: (_: T5) => T6,
  f6: (_: T6) => T7,
  f7: (_: T7) => T8,
  f8: (_: T8) => T9,
  f9: (_: T9) => T10,
  f10: (_: T10) => T11,
  f11: (_: T11) => T12,
  f12: (_: T12) => T13,
  f13: (_: T13) => T14,
  f14: (_: T14) => T15,
): T15;
export function pipe<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
>(
  x: T1,
  f1: (_: T1) => T2,
  f2: (_: T2) => T3,
  f3: (_: T3) => T4,
  f4: (_: T4) => T5,
  f5: (_: T5) => T6,
  f6: (_: T6) => T7,
  f7: (_: T7) => T8,
  f8: (_: T8) => T9,
  f9: (_: T9) => T10,
  f10: (_: T10) => T11,
  f11: (_: T11) => T12,
  f12: (_: T12) => T13,
  f13: (_: T13) => T14,
  f14: (_: T14) => T15,
  f15: (_: T15) => T16,
): T16;
// deno-lint-ignore no-explicit-any
export function pipe(x: any, ...fs: Array<(_: any) => any>): any {
  return fs.reduce((x, f) => f(x), x);
}
