interface BreakPoints {
  [key: string]: number
}

const queries: BreakPoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

export const mq = Object.keys(queries).reduce<
  Record<keyof typeof queries, string>
>((acc, cur) => {
  acc[cur] = `@media (min-width: ${queries[cur]}px)`
  return acc
}, {})
