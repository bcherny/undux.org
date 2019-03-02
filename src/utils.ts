export function invert<
  A extends string | number | symbol,
  B extends string | number | symbol
>(r: Record<A, B>): Record<B, A> {
  let o: Record<B, A> = {} as any
  Object.keys(r).forEach(k => (o as any)[r[k as A]] = k)
  return o
}
