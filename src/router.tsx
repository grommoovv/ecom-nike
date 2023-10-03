import { CartPageLazy } from 'pages/CartPage/ui/CartPage.lazy'
import { CollectionPageLazy } from 'pages/CollectionPage'
import { FavoritesPageLazy } from 'pages/FavoritesPage'
import { HomePageLazy } from 'pages/HomePage'
import { MenPageLazy } from 'pages/MenPage'
import { ProductPageLazy } from 'pages/ProductPage'
import { WomenPageLazy } from 'pages/WomenPage'
import { Suspense } from 'react'
import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { RootLayout } from 'shared/layouts'
import { Loader } from 'shared/ui'

enum routeEnum {
  HOME = 'home',
  COLLECTION = 'collection',
  MEN = 'men',
  WOMEN = 'women',
  PRODUCT = 'product',
  FAVORITES = 'favorites',
  CART = 'cart',
}

type RoutePaths = Record<routeEnum, string>

const routePaths: RoutePaths = {
  [routeEnum.HOME]: '/',
  [routeEnum.COLLECTION]: '/collection',
  [routeEnum.MEN]: '/men',
  [routeEnum.WOMEN]: '/women',
  [routeEnum.PRODUCT]: '/collection/:title',
  [routeEnum.FAVORITES]: '/favorites',
  [routeEnum.CART]: '/cart',
}

const appRoutes = {
  [routeEnum.HOME]: {
    path: routePaths.home,
    element: <HomePageLazy />,
  },
  [routeEnum.COLLECTION]: {
    path: routePaths.collection,
    element: <CollectionPageLazy />,
  },
  [routeEnum.MEN]: {
    path: routePaths.men,
    element: <MenPageLazy />,
  },
  [routeEnum.WOMEN]: {
    path: routePaths.women,
    element: <WomenPageLazy />,
  },
  [routeEnum.PRODUCT]: {
    path: routePaths.product,
    element: <ProductPageLazy />,
  },
  [routeEnum.FAVORITES]: {
    path: routePaths.favorites,
    element: <FavoritesPageLazy />,
  },
  [routeEnum.CART]: {
    path: routePaths.cart,
    element: <CartPageLazy />,
  },
}

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<RootLayout />}>
            {Object.values(appRoutes).map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export { Router }
