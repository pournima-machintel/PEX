const getSitemapRoutes = require("./sitemapRoutes");
const getGenerateRoutes = require("./generateRoutes");
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "machintel",
    htmlAttrs: {
      lang: "en",
    },

    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      // <script src="https://myawesome-lib.js"></script>

      { src: "/js/flowbite.js" },
      {
        src: "https://cdn-in.pagesense.io/js/60023062656/b1bb99d10e06476bab21b29af14ae0da.js",
      },
      { src: "/js/cookiebotHide.js" },
      {
        src: "https://consent.cookiebot.com/uc.js?cbid=abb50094-60dd-4ec0-b61b-4a5f40e6922f",
      },
      // { src: "/js/zohoBot.js" },
      { src: "/js/hotjar.js" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "vue-social-sharing/nuxt",
    "@nuxtjs/sitemap",
    "@nuxtjs/gtm",
    "@nuxtjs/fontawesome",
  ],
  googleFonts: {
    families: {
      Manrope: [300, 400, 500, 700, 800],
      "DM+Serif+Display": [400],
    },
  },
  fontawesome: {
    icons: {
      solid: ["faHome"],
      brands: [
        "faFacebookF",
        "faFacebook",
        "faFacebookSquare",
        "faLinkedinIn",
        "faLinkedin",
        "faTwitter",
        "faTwitterSquare",
        "faXTwitter",
      ],
    },
  },
  gtm: {
    id: "GTM-WPZPZNP",
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/dayjs",
    "vue-scrollto/nuxt",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  },
  generate: {
    async routes() {
      return await getGenerateRoutes();
    },
  },
  sitemap: {
    cacheTime: 1000 * 60 * 60 * 2,
    path: "/sitemap.xml",
    hostname: "https://partnerexplorer.com/", // Replace with your site's URL
    exclude: ["/thankyou", "/login"],
    trailingSlash: true,
    async routes() {
      return await getSitemapRoutes();
    },
  },
};
