/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/components/Navbar.jsx",
    "./src/components/Footer.jsx",
    "./src/components/Ad.jsx",
    "./src/components/cart/Cart.jsx",
    "./src/pages/Home.jsx",
    "./src/pages/Headphones.jsx",
    "./src/pages/Earphones.jsx",
    "./src/pages/Speakers.jsx",
    "./src/pages/Checkout.jsx",
    "./src/pages/Success.jsx",
    "./src/pages/headphones/Mark2.jsx",
    "./src/pages/headphones/Mark1.jsx",
    "./src/pages/headphones/Xx59.jsx",
    "./src/pages/speakers/SpeakerZx9.jsx",
    "./src/pages/speakers/SpeakerZx7.jsx",
    "./src/pages/earphones/EarphoneYx1.jsx",
    "./src/components/nav-cards/SpeakersCard.jsx",
    "./src/components/nav-cards/EarphonesCard.jsx",
    "./src/components/nav-cards/HeadphonesCard.jsx",
    "./src/components/product-card/ProductCard.jsx",
    "./src/components/product-page/ProductFeature.jsx",
    "./src/components/product-page/ProductGallery.jsx",
    "./src/components/product-page/ProductInfo.jsx",
    "./src/components/product-page/ProductRelated.jsx",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
