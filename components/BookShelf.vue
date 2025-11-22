<template>
  <div class="bookshelf-component">
    <div class="filter-section">
      <h3>Filter by Genre</h3>
      <div class="filter-buttons">
        <button 
          v-for="genre in genres" 
          :key="genre"
          :class="['filter-btn', activeGenre === genre ? 'active' : '']"
          @click="setActiveGenre(genre)"
        >
          {{ genre }}
        </button>
      </div>
    </div>

    <div class="books-grid">
      <div 
        v-for="book in filteredBooks" 
        :key="book.id"
        class="book-item"
        @click="viewBook(book)"
      >
        <div class="book-cover">{{ book.emoji }}</div>
        <div class="book-info">
          <h4 class="book-title">{{ book.title }}</h4>
          <p class="book-author">{{ book.author }}</p>
          <span class="book-genre">{{ book.genre }}</span>
          <span :class="['status-badge', `status-${book.status}`]">
            {{ book.status }}
          </span>
        </div>
      </div>
    </div>

    <div class="stats">
      <p>Showing {{ filteredBooks.length }} of {{ books.length }} books</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookShelf',
  data() {
    return {
      activeGenre: 'all',
      genres: ['all', 'fiction', 'fantasy', 'sci-fi', 'mystery', 'romance', 'non-fiction', 'classics'],
      books: [
        {
          id: 1,
          title: 'The Midnight Library',
          author: 'Matt Haig',
          genre: 'fiction',
          emoji: '📚',
          status: 'reading',
          link: 'https://www.goodreads.com/book/show/52578297-the-midnight-library'
        },
        {
          id: 2,
          title: 'Project Hail Mary',
          author: 'Andy Weir',
          genre: 'sci-fi',
          emoji: '🚀',
          status: 'completed',
          link: 'https://www.goodreads.com/book/show/54493401-project-hail-mary'
        },
        {
          id: 3,
          title: 'Klara and the Sun',
          author: 'Kazuo Ishiguro',
          genre: 'fiction',
          emoji: '🤖',
          status: 'reading',
          link: 'https://www.goodreads.com/book/show/54120408-klara-and-the-sun'
        },
        {
          id: 4,
          title: 'Piranesi',
          author: 'Susanna Clarke',
          genre: 'fantasy',
          emoji: '🏰',
          status: 'completed',
          link: 'https://www.goodreads.com/book/show/50202953-piranesi'
        },
        {
          id: 5,
          title: 'The Invisible Life of Addie LaRue',
          author: 'V.E. Schwab',
          genre: 'fantasy',
          emoji: '✨',
          status: 'completed',
          link: 'https://www.goodreads.com/book/show/50623864-the-invisible-life-of-addie-larue'
        },
        {
          id: 6,
          title: 'The House in the Cerulean Sea',
          author: 'T.J. Klune',
          genre: 'fantasy',
          emoji: '🌊',
          status: 'completed',
          link: 'https://www.goodreads.com/book/show/45047384-the-house-in-the-cerulean-sea'
        },
        {
          id: 7,
          title: 'Pride and Prejudice',
          author: 'Jane Austen',
          genre: 'classics',
          emoji: '💍',
          status: 'completed',
          link: 'https://www.goodreads.com/book/show/1885.Pride_and_Prejudice'
        },
        {
          id: 8,
          title: '1984',
          author: 'George Orwell',
          genre: 'classics',
          emoji: '👁️',
          status: 'completed',
          link: 'https://www.goodreads.com/book/show/40961427-1984'
        }
      ]
    }
  },
  computed: {
    filteredBooks() {
      if (this.activeGenre === 'all') {
        return this.books
      }
      return this.books.filter(book => book.genre === this.activeGenre)
    }
  },
  methods: {
    setActiveGenre(genre) {
      this.activeGenre = genre
    },
    viewBook(book) {
      window.open(book.link, '_blank')
    }
  }
}
</script>

<style scoped>
.bookshelf-component {
  margin: 2rem 0;
}

.filter-section {
  margin-bottom: 2rem;
}

.filter-section h3 {
  margin-bottom: 1rem;
  color: var(--vp-c-brand);
}

.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.book-item {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid var(--vp-c-bg-soft);
}

.book-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.book-cover {
  font-size: 3rem;
  margin-bottom: 1rem;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg-soft);
  border-radius: 4px;
}

.book-info {
  text-align: center;
}

.book-title {
  font-weight: 600;
  font-size: 0.9rem;
  margin: 0.5rem 0 0.2rem 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.book-author {
  font-size: 0.8rem;
  color: var(--vp-c-text-light);
  margin: 0 0 0.5rem 0;
}

.stats {
  text-align: center;
  margin-top: 2rem;
  color: var(--vp-c-text-light);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .books-grid {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 1rem;
  }
  
  .book-cover {
    font-size: 2.5rem;
    height: 100px;
  }
}
</style>