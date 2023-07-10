import { CollectionList } from '../CollectionList/CollectionList'
import cls from './Collection.module.scss'

export const Collection = () => {
  return (
    <>
      <div className={cls.collection}>
        <h1 className={cls.title}>Collection Shoes</h1>
        <div className={cls.body}>
          <div className={cls.items}>
            <CollectionList />
          </div>
        </div>
      </div>
    </>
  )
}
