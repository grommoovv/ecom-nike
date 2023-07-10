import { routePath } from 'shared/config'

export const navWomen = [
  { label: 'Shoes', url: routePath.collection },
  { label: 'Clothing', url: routePath.collection },
  { label: 'Sale', url: routePath.collection },
  { label: 'Premium Leggings', url: routePath.collection },
  { label: 'Find You Sports Bra', url: routePath.collection },
]

export const heroBannerWomen = {
  title: 'Own the Floor',
  subtitle:
    'Hit the dancefloor in looks that represent you as loud as your moves',
		imageURL:
    'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/d88c5e85-de39-44da-971b-bbb11fced488/women-s-shoes-clothing-accessories.jpg',
  buttonText: 'Explore',
  buttonLink: routePath.collection,
}

export const LatestAndGreatestWomen = [
  {
    imageURL:
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_593,c_limit/020a4f69-0821-4d9e-8283-e1f9a1de033f/women-s-shoes-clothing-accessories.jpg',
    title: 'Leggings',
  },
  {
    imageURL:
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_593,c_limit/d237d258-90e4-48fb-862b-afa1ae59b475/women-s-shoes-clothing-accessories.jpg',
    title: 'Sports Bras',
  },
  {
    imageURL:
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_593,c_limit/f864001d-10ff-4a63-b66f-7093e69b4e68/image.jpg',
    title: 'Styled By: Dina Asher-Smith',
  },
]

export const SeasonalShopWomen = [
  {
    imageURL:
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/1619c07c-3bd5-411d-b7e7-4334b9e4e355/women-s-shoes-clothing-accessories.jpg',
    title: 'Styles for Dawn to Dusk',
    buttonURL: routePath.collection,
    buttonText: 'Shop',
  },
  {
    imageURL:
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/97e2e4c0-516f-4485-b698-de7fe2450387/women-s-shoes-clothing-accessories.jpg',
    title: 'Gear to Chase Your Goals',
    buttonURL: routePath.collection,
    buttonText: 'Shop',
  },
]
