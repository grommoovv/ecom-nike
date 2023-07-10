import { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router'
import { Header } from 'widgets/header'
import { Banner } from 'widgets/banner'
import { Footer } from 'widgets/footer'
import { Loader } from 'shared/ui'

export const RootLayout = () => {
  const location = useLocation()

  console.log(location)

  const isCartPage = location.pathname === '/cart'
  const isFavPage = location.pathname === '/favorites'
  const isProductPage = location.pathname === '/product'

  const showFooter = !(isCartPage || isProductPage || isFavPage)

  const fixed = 'fixed top-0 right-0 left-0'

  return (
    <>
      <div className={`header-wrap ${isCartPage ? fixed : ''}`}>
        <Header />
        <Banner />
      </div>
      <main className='main'>
        <div className='main-container'>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      {showFooter && <Footer />}
    </>
  )
}
