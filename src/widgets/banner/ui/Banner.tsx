import { memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import cls from './Banner.module.scss'

export const Banner = memo(() => {
  return (
    <>
      <div className={cls.announcement}>
        <div className='announcement__wrapper'>
          <Swiper
            className='announcement__swiper'
            modules={[Autoplay]}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide className='announcement__swiper-slide'>
              <div className={cls.slideWrapper}>
                <div className={cls.title}>25% Off Site-Wide</div>
                <div className={cls.text}>
                  Nike Members, use code SHINE23 when you spend £50 or more.
                  Exclusions apply.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='announcement__swiper-slide'>
              <div className={cls.slideWrapper}>
                <div className={cls.title}>Free Delivery & Returns</div>
                <div className={cls.text}>
                  Nike Members get free delivery and free 30-day returns.
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
})
