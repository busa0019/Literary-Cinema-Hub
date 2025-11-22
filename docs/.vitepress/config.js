import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Literary Cinema Hub',
  description: 'A curated collection of books, movies, and literary insights',
  base: '/',
  
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { 
      href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600&display=swap', 
      rel: 'stylesheet' 
    }],
    ['script', { src: 'https://unpkg.com/lucide@latest/dist/umd/lucide.js' }]
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Bookshelf', link: '/bookshelf' },
      { text: 'Authors', link: '/authors' },
      { text: 'Adaptations', link: '/adaptations' },
      { text: 'Blog', link: '/blog' },
      { text: 'Community', link: '/community' },
      { 
        text: 'More', 
        items: [
          { text: 'Reading Journey', link: '/reading-journey' },
          { text: 'Movie Collection', link: '/movie-collection' },
          { text: 'Recommendations', link: '/recommendations' },
          { text: 'Literary Events', link: '/literary-events' }
        ]
      }
    ],

    sidebar: {
      '/': [
        {
          text: 'Welcome',
          items: [
            { text: 'Home', link: '/' },
            { text: 'About Me', link: '/about-me' }
          ]
        },
        {
          text: 'Books & Reading',
          items: [
            { text: 'Digital Bookshelf', link: '/bookshelf' },
            { text: 'Favorite Authors', link: '/authors' },
            { text: 'Reading Journey', link: '/reading-journey' },
            { text: 'Reading Statistics', link: '/reading-stats' }
          ]
        },
        {
          text: 'Movies & Adaptations',
          items: [
            { text: 'Book to Movie', link: '/adaptations' },
            { text: 'Movie Collection', link: '/movie-collection' },
            { text: 'Recommendations', link: '/recommendations' }
          ]
        },
        {
          text: 'Community & Blog',
          items: [
            { text: 'Blog & Reviews', link: '/blog' },
            { text: 'Community', link: '/community' },
            { text: 'Literary Events', link: '/literary-events' },
            { text: 'Resources', link: '/resources' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername' },
      { icon: 'twitter', link: 'https://twitter.com/yourusername' },
      { icon: 'instagram', link: 'https://instagram.com/yourusername' }
    ],

    footer: {
      message: 'Made with ❤️ for literature and cinema',
      copyright: 'Copyright © 2025 Literary Cinema Hub'
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./docs/.vitepress/theme/styles/_variables.scss";`
        }
      }
    }
  }
})