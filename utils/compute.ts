export function toThousands(price: string) {
  return (price || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}
