interface Product {
  id: number
  title: string
  price: number
  image: string
  description: string
}

interface Cart extends Product {
  quantity: number
}

export type { Product, Cart }
