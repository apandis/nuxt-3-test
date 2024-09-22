// nuxt.config.ts
export default defineNuxtConfig({
  // Enable server-side rendering (SSR) and static site generation (SSG)
  // Pre-renders pages at build time for faster load times and better SEO
  ssr: true,

  // Application configuration
  app: {
    // Base URL of the application
    // Adjust if deploying to a subdirectory
    baseURL: "/",

    // HTML <head> configuration
    head: {
      // Default title of the application
      title: "Nuxt App",

      // Meta tags for SEO and responsiveness
      meta: [
        { charset: "utf-8" }, // Character encoding
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        }, // Responsive design
        {
          hid: "description",
          name: "description",
          content: "My Nuxt 3 Application",
        }, // Page description for SEO
      ],

      // Link tags for external resources
      link: [
        // Favicon
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        // Preconnect to required origins (e.g., CDN)
        // { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        // Preload critical CSS or fonts (uncomment and adjust as needed)
        // { rel: 'preload', href: '/styles/main.css', as: 'style' },
      ],
    },
  },

  // Global CSS files to include in the application
  css: [
    // Include your main CSS file (uncomment and adjust the path if needed)
    // '@/assets/css/main.css',
  ],

  // Auto-import components from the specified directories
  components: {
    // Automatically scans and imports components from the 'components' directory
    dirs: ["~/components"],
  },

  // Modules to include in the build
  modules: [
    // Image optimization module for Nuxt 3
    "@nuxt/image",
    // ESLint module for linting during development
  ],

  // Image optimization configuration
  image: {
    // Define image providers
    providers: {
      // Use the built-in static image optimizer
      static: {
        driver: "static",
      },
    },
    // Define responsive image sizes for different screen widths
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    // Additional image options can be configured here
  },

  // Build configuration for optimizing the application
  build: {
    // Disable bundle analysis to speed up production builds
    analyze: false,
    // Transpile specific dependencies if necessary
    // Useful if a dependency is not in ES5 and needs to be transpiled
    transpile: [],
  },

  // Vite configuration for build optimizations
  vite: {
    // Configure build options for better performance
    build: {
      sourcemap: false,
      // Remove the rollupOptions.output.manualChunks configuration
    },
  },

  // Nitro configuration (Nuxt's server engine)
  nitro: {
    // Pre-render configuration for static generation
    prerender: {
      // Automatically crawl and pre-render all routes linked from the homepage
      crawlLinks: true,
      // Specify routes to pre-render
      routes: [
        "/", // Ensure the homepage is pre-rendered
        // Add other static routes if necessary
      ],
    },
    // Compress static assets to reduce file sizes
    compressPublicAssets: true,
  },

  // Generate configuration for static site generation
  generate: {
    // Specify routes to pre-render
    routes: [
      "/", // Ensure the homepage is pre-rendered
      // Add other static routes if necessary
    ],
  },

  // Runtime configuration for environment variables
  runtimeConfig: {
    // Public runtime configuration, available on both server and client
    public: {
      // Add your public environment variables here
      // Example: apiBaseUrl: process.env.API_BASE_URL || 'https://api.example.com',
    },
    // Private runtime configuration, available only on the server
    // Example: secretKey: process.env.SECRET_KEY,
  },

  // Disable Nuxt DevTools in production for better performance
  devtools: { enabled: false },

  compatibilityDate: "2024-09-22",
});
