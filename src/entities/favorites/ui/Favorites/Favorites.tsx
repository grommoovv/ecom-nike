import { useAppSelector } from 'shared/hooks'
import { FavoritesList } from '../FavoritesList/FavoritesList'
import { favoritesSelector } from 'entities/favorites/model/selectors/favoritesSelector'
import cls from './Favorites.module.scss'

export const Favorites = () => {
  const { length } = useAppSelector(favoritesSelector)

  return (
    <>
      <div className={cls.favorites}>
        {length ? (
          <>
            <h1 className={cls.title}>Your Favorites Shoes</h1>
            <FavoritesList />
          </>
        ) : (
          <div className={cls.empty}>
            <h1 className={cls.emptyTitle}>Your Favorites is empty</h1>
            <p>You have not added any products to your favorites yet</p>
          </div>
        )}
      </div>
    </>
  )
}
