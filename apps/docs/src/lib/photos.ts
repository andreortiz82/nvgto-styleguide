const base = import.meta.env.BASE_URL;

function photo(file: string) {
  return `${base}photos/${file}`;
}

/** Navigato stays — hotel rooms, beaches, amenities. */
export const STAY_PHOTOS = {
  pool: photo("hotel-pool.jpg"),
  suite: photo("hotel-suite.jpg"),
  bedroom: photo("hotel-bedroom.jpg"),
  terrace: photo("resort-terrace.jpg"),
  linen: photo("hotel-bed-linen.jpg"),
  bathroom: photo("hotel-bathroom.jpg"),
  beach: photo("beach.jpg"),
  spa: photo("spa-amenity.jpg"),
} as const;

/** Nox & Vale — menswear, womenswear, accessories. */
export const GALLERY_PHOTOS = {
  hoop: photo("hoop-earrings.jpg"),
  belt: photo("leather-belt.jpg"),
  suit: photo("menswear-suit.jpg"),
  womenswear: photo("womenswear.jpg"),
  handbag: photo("handbag.jpg"),
  shoes: photo("shoes.jpg"),
  coat: photo("menswear-coat.jpg"),
  jewelry: photo("jewelry.jpg"),
} as const;

export const STAY_GALLERY = [
  STAY_PHOTOS.pool,
  STAY_PHOTOS.suite,
  STAY_PHOTOS.bedroom,
  STAY_PHOTOS.terrace,
];

export const STAY_PDP_GALLERY = [
  ...STAY_GALLERY,
  STAY_PHOTOS.linen,
  STAY_PHOTOS.bathroom,
  STAY_PHOTOS.beach,
  STAY_PHOTOS.spa,
];

export type PhotoCredit = {
  file: string;
  description: string;
  source: "Unsplash" | "Pexels";
  href: string;
};

export const PHOTO_CREDITS: PhotoCredit[] = [
  {
    file: "hotel-pool.jpg",
    description: "Luxury hotel courtyard and pool",
    source: "Unsplash",
    href: "https://unsplash.com/photos/white-and-brown-concrete-building-near-swimming-pool-during-daytime-Yrxr3bsPdS0",
  },
  {
    file: "hotel-suite.jpg",
    description: "Hotel suite interior",
    source: "Unsplash",
    href: "https://unsplash.com/photos/white-bed-comforter-near-window-gREquCUXQLI",
  },
  {
    file: "hotel-bedroom.jpg",
    description: "Hotel bedroom",
    source: "Pexels",
    href: "https://www.pexels.com/photo/271624/",
  },
  {
    file: "resort-terrace.jpg",
    description: "Resort terrace",
    source: "Unsplash",
    href: "https://unsplash.com/photos/brown-wooden-dock-between-palm-trees-C3V88BAaR4c",
  },
  {
    file: "hotel-bed-linen.jpg",
    description: "Bed linen",
    source: "Unsplash",
    href: "https://unsplash.com/photos/white-bed-linen-with-throw-pillows-Yrxr3bsPdS0",
  },
  {
    file: "hotel-bathroom.jpg",
    description: "Hotel bathroom",
    source: "Unsplash",
    href: "https://unsplash.com/photos/white-bathtub-near-white-wall-iUTCQDwZ5z4",
  },
  {
    file: "beach.jpg",
    description: "Beach",
    source: "Unsplash",
    href: "https://unsplash.com/photos/seashore-during-golden-hour-KMn4VEeEPR8",
  },
  {
    file: "spa-amenity.jpg",
    description: "Spa amenity",
    source: "Unsplash",
    href: "https://unsplash.com/photos/round-brown-wooden-table-with-chairs-N4DbvPCuu5I",
  },
  {
    file: "hoop-earrings.jpg",
    description: "Hoop earrings",
    source: "Unsplash",
    href: "https://unsplash.com/photos/gold-colored-hoop-earrings-P2fB6jbRV3A",
  },
  {
    file: "leather-belt.jpg",
    description: "Leather belt",
    source: "Unsplash",
    href: "https://unsplash.com/photos/black-leather-belt-with-silver-buckle-4qKqkH6nYeg",
  },
  {
    file: "menswear-suit.jpg",
    description: "Menswear suit",
    source: "Unsplash",
    href: "https://unsplash.com/photos/man-wearing-black-suit-jacket-and-pants-7cVFCd4j6n8",
  },
  {
    file: "womenswear.jpg",
    description: "Womenswear",
    source: "Unsplash",
    href: "https://unsplash.com/photos/woman-wearing-black-and-white-stripe-shirt-OYYE4g-I5ZQ",
  },
  {
    file: "handbag.jpg",
    description: "Handbag",
    source: "Unsplash",
    href: "https://unsplash.com/photos/brown-leather-handbag-KUDDT6hFaMc",
  },
  {
    file: "shoes.jpg",
    description: "Shoes",
    source: "Unsplash",
    href: "https://unsplash.com/photos/pair-of-brown-leather-pumps-KUDDT6hFaMc",
  },
  {
    file: "menswear-coat.jpg",
    description: "Menswear coat",
    source: "Unsplash",
    href: "https://unsplash.com/photos/man-in-black-coat-standing-on-gray-concrete-floor-4Hg8LH9Hoxc",
  },
  {
    file: "jewelry.jpg",
    description: "Jewelry",
    source: "Unsplash",
    href: "https://unsplash.com/photos/gold-colored-ring-on-white-surface-5sF6NRkJViw",
  },
];
