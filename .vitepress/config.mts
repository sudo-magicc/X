import { defineConfig } from 'vitepress'
import generateFeed from "./config/hooks/generateFeed"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lenovo Z5s",
  description: "List of custom roms for Lenovo Z5s",
  base: '/ViteLenovoZ5s',
  
  buildEnd: async (context) => {
		generateFeed(context, "http://localhost:5173/ViteLenovoZ5s")
	},

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Instructions', link: '/guides/' },
      {
        text: 'Select version',
        items: [
          { text: 'Android 10', link: '/roms/a10/' },
          { text: 'Android 11', link: '/roms/a11/' },
          { text: 'Android 12', link: '/roms/a12/' },
          { text: 'Android 13', link: '/roms/a13/' },
          { text: 'Android 14', link: '/roms/a14/' },
        ]
      },
      {
        text: 'Recovery',
        items: [
          { text: 'TWRP', link: '/roms/recovery/twrp' },
          { text: 'OrangeFox', link: '/roms/recovery/ofox' },
          { text: 'PBRP', link: '/roms/recovery/pbrp' },
        ]
      },
      {
        text: "News",
        link: "/news/",
      },
    ],

    sidebar: {
      "guides": [
        {
          text: 'General instructions',
          items: [
            { text: 'How to unlock device', link: '/guides/unlock.md' },
          ]
        },
        {
          text: 'How to flash',
          items: [
            { text: 'Dynamic Partitions (A14+)', link: '/guides/flash14.md' },
            { text: 'OSS Builds', link: '/guides/flashoss.md' },
            { text: 'Android 11/12', link: '/guides/flash1112.md' },
            { text: 'Android 10', link: '/guides/flash10.md' },
            { text: 'TWRP, OrangeFox, etc', link: '/guides/flashtwrp.md' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  }
})
