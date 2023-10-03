import {
  navMen,
  heroBannerMen,
  LatestAndGreatestMen,
  SeasonalShopMen,
  discoverOurApps,
} from 'shared/assets'
import { CategoriesSection } from 'widgets/categories-section'
import { HeroBanner } from 'widgets/hero-banner'
import { Navbar } from 'widgets/navbar'
import { PromoSection } from 'widgets/promo-section'

const MenPage = () => {
  return (
    <>
      <section className='men'>
        <Navbar title='Men' navItems={navMen} />

        <HeroBanner details={heroBannerMen} />

        <CategoriesSection
          title='Latest & Greatest'
          details={LatestAndGreatestMen}
        />

        <PromoSection title='Your Seasonal Shop' details={SeasonalShopMen} />

        <PromoSection title='Discover Our Apps' details={discoverOurApps} />
      </section>
    </>
  )
}

export default MenPage
