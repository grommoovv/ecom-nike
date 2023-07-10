import { CartPageLazy } from 'pages/CartPage/ui/CartPage.lazy'
import { CollectionPageLazy } from 'pages/CollectionPage'
import { FavoritesPageLazy } from 'pages/FavoritesPage'
import { HomePageLazy } from 'pages/HomePage'
import { MenPageLazy } from 'pages/MenPage'
import { ProductPageLazy } from 'pages/ProductPage'
import { WomenPageLazy } from 'pages/WomenPage'
import { RouteProps } from 'react-router-dom'

export enum AppRoutes {
  HOME = 'home',
  COLLECTION = 'collection',
  MEN = 'men',
  WOMEN = 'women',
  PRODUCT = 'product',
  FAVORITES = 'favorites',
  CART = 'cart',
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.COLLECTION]: '/collection',
  [AppRoutes.MEN]: '/men',
  [AppRoutes.WOMEN]: '/women',
  [AppRoutes.PRODUCT]: '/collection/:title',
  [AppRoutes.FAVORITES]: '/favorites',
  [AppRoutes.CART]: '/cart',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: routePath.home,
    element: <HomePageLazy />,
  },
  [AppRoutes.COLLECTION]: {
    path: routePath.collection,
    element: <CollectionPageLazy />,
  },
  [AppRoutes.MEN]: {
    path: routePath.men,
    element: <MenPageLazy />,
  },
  [AppRoutes.WOMEN]: {
    path: routePath.women,
    element: <WomenPageLazy />,
  },
  [AppRoutes.PRODUCT]: {
    path: routePath.product,
    element: <ProductPageLazy />,
  },
  [AppRoutes.FAVORITES]: {
    path: routePath.favorites,
    element: <FavoritesPageLazy />,
  },
  [AppRoutes.CART]: {
    path: routePath.cart,
    element: <CartPageLazy />,
  },
}
