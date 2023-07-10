import { collectionSelector } from 'entities/collection'
import { useEffect } from 'react'
import CollectionCard from 'entities/collection/ui/CollectionCard/CollectionCard'
import { useAppDispatch, useAppSelector } from 'shared/hooks'
import { getCollection } from 'entities/collection/model/service/getCollection'
import { products } from 'products'

export const CollectionList = () => {
  const { collection } = useAppSelector(collectionSelector)
  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(getCollection())
  // }, [dispatch])

  console.log(products)

  console.log(collection)

  return (
    <>
      <ul>
        {products.map((item) => (
          <li>
            <CollectionCard details={item} key={item.id} />
          </li>
        ))}
      </ul>
    </>
  )
}
