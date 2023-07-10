import { routePath } from 'shared/config'

export const navMen = [
  { label: 'Sale', url: routePath.collection },
  { label: 'Shoes', url: routePath.collection },
  { label: 'Clothing', url: routePath.collection },
  { label: 'Just Released', url: routePath.collection },
  { label: 'Best Sellers', url: routePath.collection },
]

export const heroBannerMen = {
  title: 'Nike Air Max Pulse',
  subtitle:
    'Powered by the underground sounds of London comes a silhouette infused with an unreal sensation of Air and durable design details, now in a new color. Shop the Air Max Pulse in Cobblestone.',
		imageURL:
    'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/b672a633-5080-41a3-85f6-c9df8960357d/men-s-shoes-clothing-accessories.jpg',
  buttonText: 'Shop Now',
  buttonLink: routePath.collection,
}

export const LatestAndGreatestMen = [
  {
    videoURL:
      'https://static.nike.com/a/images/f_mp4/w_593,c_limit/eca04620-d08e-4334-9676-040263d27eb4/image.gif',
    title: 'Nike Running Shoe Finder',
    video: true,
  },
  {
    imageURL:
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_593,c_limit/f29ea519-be6b-420a-9b45-f67c402fd3ea/men-s-shoes-clothing-accessories.jpg',
    title: 'Bestsellers',
  },
  {
    imageURL:
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_593,c_limit/a71482a3-b147-416b-84eb-9586a5ca8c71/men-s-shoes-clothing-accessories.jpg',
    title: 'Member Shop',
  },
]

export const SeasonalShopMen = [
  {
    imageURL:
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/f1eaffea-c947-466d-bd3e-955419358ecb/men-s-shoes-clothing-accessories.jpg',
    title: 'Outerwear Essentials',
    buttonURL: routePath.collection,
    buttonText: 'Shop',
  },
  {
    imageURL:
      'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/6c6c08fd-ef0d-49a9-b895-65a681b6dae9/men-s-shoes-clothing-accessories.jpg',
    title: 'Layers for Sport',
    buttonURL: routePath.collection,
    buttonText: 'Shop',
  },
]
