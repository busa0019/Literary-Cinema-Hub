<template>
  <div class="reading-progress-component">
    <h3>Current Reading Progress</h3>
    
    <div class="current-books">
      <div 
        v-for="book in currentBooks" 
        :key="book.id"
        class="progress-book"
      >
        <div class="book-header">
          <h4>{{ book.title }}</h4>
          <span class="progress-percent">{{ book.progress }}%</span>
        </div>
        <p class="book-author">{{ book.author }}</p>
        
        <div class="progress-container">
          <div 
            class="progress-bar" 
            :style="{ width: book.progress + '%' }"
          ></div>
        </div>
        
        <div class="book-meta">
          <span class="pages">{{ book.currentPage }}/{{ book.totalPages }} pages</span>
          <span class="started">Started {{ book.started }}</span>
        </div>
      </div>
    </div>

    <div class="reading-stats">
      <div class="stat">
        <div class="stat-value">{{ yearlyProgress }}%</div>
        <div class="stat-label">Yearly Goal</div>
      </div>
      <div class="stat">
        <div class="stat-value">{{ pagesRead }}</div>
        <div class="stat-label">Pages Read</div>
      </div>
      <div class="stat">
        <div class="stat-value">{{ booksCompleted }}</div>
        <div class="stat-label">Books Completed</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReadingProgress',
  data() {
    return {
      currentBooks: [
        {
          id: 1,
          title: 'The Midnight Library',
          author: 'Matt Haig',
          progress: 65,
          currentPage: 195,
          totalPages: 300,
          started: '2 weeks ago'
        },
        {
          id: 2,
          title: 'Project Hail Mary',
          author: 'Andy Weir',
          progress: 40,
          currentPage: 180,
          totalPages: 450,
          started: '1 week ago'
        },
        {
          id: 3,
          title: 'Klara and the Sun',
          author: 'Kazuo Ishiguro',
          progress: 20,
          currentPage: 80,
          totalPages: 400,
          started: '3 days ago'
        }
      ],
      yearlyProgress: 89,
      pagesRead: '28,450',
      booksCompleted: 89
    }
  }
}
</script>

<style scoped>
.reading-progress-component {
  background: var(--vp-c-bg-soft);
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.reading-progress-component h3 {
  margin-bottom: 1.5rem;
  color: var(--vp-c-brand);
  text-align: center;
}

.current-books {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.progress-book {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.book-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.book-header h4 {
  margin: 0;
  font-size: 1.1rem;
  color: var(--vp-c-text);
}

.progress-percent {
  background: var(--vp-c-brand);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

.book-author {
  color: var(--vp-c-text-light);
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
}

.progress-container {
  background: var(--vp-c-bg-alt);
  height: 8px;
  border-radius: 4px;
  margin: 1rem 0;
  overflow: hidden;
}

.progress-bar {
  background: linear-gradient(90deg, var(--vp-c-accent) 0%, var(--vp-c-accent-light) 100%);
  height: 100%;
  border-radius: 4px;
  transition: width 0.3s ease;
}

.book-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: var(--vp-c-text-light);
}

.reading-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  text-align: center;
}

.stat {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.stat-value {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--vp-c-brand);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.8rem;
  color: var(--vp-c-text-light);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .reading-progress-component {
    padding: 1.5rem;
  }
  
  .book-header {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .reading-stats {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
}
</style>