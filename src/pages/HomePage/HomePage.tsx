import { heroBannerHome, moreToExplore, discoverOurApps } from '../../shared/assets'
import { CategoriesSection } from '../../widgets/categories-section'
import { HeroBanner } from '../../widgets/hero-banner'
import { PromoSection } from '../../widgets/promo-section'

const HomePage = () => {
  return (
    <>
      <section>
        <HeroBanner details={heroBannerHome} />

        <CategoriesSection title='More To Explore' details={moreToExplore} />

        <PromoSection title='Discover Our Apps' details={discoverOurApps} />
      </section>
    </>
  )
}

export default HomePage
