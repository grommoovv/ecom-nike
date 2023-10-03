import {
  navWomen,
  heroBannerWomen,
  LatestAndGreatestWomen,
  SeasonalShopWomen,
  discoverOurApps,
} from 'shared/assets'
import { CategoriesSection } from 'widgets/categories-section'
import { HeroBanner } from 'widgets/hero-banner'
import { Navbar } from 'widgets/navbar'
import { PromoSection } from 'widgets/promo-section'

const WomenPage = () => {
  return (
    <>
      <section className='women'>
        <Navbar title='Women' navItems={navWomen} />

        <HeroBanner details={heroBannerWomen} />

        <CategoriesSection
          title='Latest & Greatest'
          details={LatestAndGreatestWomen}
        />

        <PromoSection title='Summer To Shine' details={SeasonalShopWomen} />

        <PromoSection title='Discover Our Apps' details={discoverOurApps} />
      </section>
    </>
  )
}

export default WomenPage
