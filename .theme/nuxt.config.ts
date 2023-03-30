import { defineNuxtConfig } from "nuxt/config";
import { joinURL } from "ufo";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true
  },
  runtimeConfig: {
    public: {
      content: {
        anchorLinks: {
          depth: 0
        }
      },
      baseURL: process.env.BASE_URL
    }
  },
  app: {
    baseURL: process.env.BASE_URL,
    head: {
      meta: [
        {
          hid: "og:description",
          property: "og:description",
          content: "Welcome to mouseless"
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://mouseless.github.io/learn-nuxt/favicon.ico"
        },
        {
          hid: "og:image:width",
          property: "og:image:width",
          content: "50"
        },
        {
          hid: "og:image:height",
          property: "og:image:height",
          content: "50"
        }
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: joinURL(process.env.BASE_URL ?? "/", "favicon.ico")
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://mouseless.github.io/brand/assets/css/primary.css"
        }
      ]
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import \"@/assets/variables.scss\";"
        }
      }
    }
  },
  css: ["~/assets/styles.scss"],
  modules: ["@nuxt/content"],
  content: {
    markdown: {
      remarkPlugins: {
        "remark-emoji": false
      }
    }
  },
  router: {
    options: {
      strict: true
    }
  },
  components: {
    dirs: [{ global: true, path: "~/components/Prose" }, "~/components"]
  },
  dir: {
    public: ".public"
  },
  generate: {
    routes: ["/not-found"]
  }
});
