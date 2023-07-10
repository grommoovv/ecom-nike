export const toUSD = new Intl.NumberFormat('en', {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'symbol',
  useGrouping: true,
})
