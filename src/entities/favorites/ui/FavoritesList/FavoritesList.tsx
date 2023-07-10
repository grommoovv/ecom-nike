import { favoritesSelector } from 'entities/favorites'
import { useAppSelector } from 'shared/hooks'
import FavoritesCard from '../FavoritesCard/FavoritesCard'

import cls from '../Favorites/Favorites.module.scss'

export const FavoritesList = () => {
  const data = useAppSelector(favoritesSelector)

  return (
    <>
      {data && (
        <div className={cls.items}>
          <ul>
            {data.map((item) => (
              <li>
                <FavoritesCard details={item} key={item.id} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
