import { FC } from 'react'
import cls from './CategoriesCard.module.scss'
import { Link } from 'react-router-dom'
import { routePath } from 'shared/config'

import { ReactComponent as LookIcon } from 'shared/assets/icons/icon-look.svg'
import { ICategories } from 'shared/assets/types/categories.interface'

interface CategoriesCardProps {
  details: ICategories
}

const videoType = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'

export const CategoriesCard: FC<CategoriesCardProps> = ({ details }) => {
  const { videoURL, imageURL, title, video, content } = details
  return (
    <>
      <div className={cls.card}>
        <div className={cls.wrapper}>
          <div className={cls.imageWrap}>
            {video ? (
              <video autoPlay loop preload='true'>
                <source src={videoURL} type={videoType} />
              </video>
            ) : (
              <img className={cls.image} src={imageURL} alt={title} />
            )}
          </div>
          {/* addit content */}
          {content && (
            <div className={cls.content}>
              <Link className={cls.category} to={routePath.collection}>
                Women
              </Link>
              <Link className={cls.link} to={routePath.collection}>
                <LookIcon />
                Shop The Look
              </Link>
            </div>
          )}
          {title && <div className={cls.title}>{title}</div>}
        </div>
      </div>
    </>
  )
}
