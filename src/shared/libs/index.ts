type Mods = Record<string, boolean | string | undefined>
type Adds = Array<string | undefined>

const cn = (cls: string, mods: Mods = {}, adds: Adds = []): string => {
  return [
    cls,
    ...adds.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ')
}

const formatUSD = new Intl.NumberFormat('en', {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'symbol',
  useGrouping: true,
})

export type { Mods, Adds }
export { cn, formatUSD }
