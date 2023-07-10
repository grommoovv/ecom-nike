import { useParams } from 'react-router'
import { Product } from 'entities/product'
import { products } from 'products'

const ProductPage = () => {
  const { title } = useParams()

  const data = products.filter((el) => el.title === title)

  console.log(data)

  return (
    <>
      <Product data={data[0]} />
    </>
  )
}

export default ProductPage
