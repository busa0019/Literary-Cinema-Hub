# Digital Bookshelf

Explore my personal collection of books with interactive filtering and search.

## Browse by Category

<div class="filter-buttons">
  <button class="filter-btn active" onclick="filterBooks('all')">All Books</button>
  <button class="filter-btn" onclick="filterBooks('fiction')">Fiction</button>
  <button class="filter-btn" onclick="filterBooks('fantasy')">Fantasy</button>
  <button class="filter-btn" onclick="filterBooks('sci-fi')">Science Fiction</button>
  <button class="filter-btn" onclick="filterBooks('mystery')">Mystery</button>
  <button class="filter-btn" onclick="filterBooks('romance')">Romance</button>
  <button class="filter-btn" onclick="filterBooks('non-fiction')">Non-Fiction</button>
  <button class="filter-btn" onclick="filterBooks('classics')">Classics</button>
</div>

<div class="books-grid">
  <div class="book-item" data-genre="fiction">
    <div class="book-cover-placeholder">📚</div>
    <div class="book-title">The Midnight Library</div>
    <div class="book-author">Matt Haig</div>
    <span class="book-genre">Fiction</span>
    <span class="status-badge status-reading">Reading</span>
  </div>

  <div class="book-item" data-genre="sci-fi">
    <div class="book-cover-placeholder">🚀</div>
    <div class="book-title">Project Hail Mary</div>
    <div class="book-author">Andy Weir</div>
    <span class="book-genre">Sci-Fi</span>
    <span class="status-badge status-completed">Completed</span>
  </div>

  <div class="book-item" data-genre="fiction">
    <div class="book-cover-placeholder">🤖</div>
    <div class="book-title">Klara and the Sun</div>
    <div class="book-author">Kazuo Ishiguro</div>
    <span class="book-genre">Fiction</span>
    <span class="status-badge status-reading">Reading</span>
  </div>

  <div class="book-item" data-genre="fantasy">
    <div class="book-cover-placeholder">🏰</div>
    <div class="book-title">Piranesi</div>
    <div class="book-author">Susanna Clarke</div>
    <span class="book-genre">Fantasy</span>
    <span class="status-badge status-completed">Completed</span>
  </div>

  <div class="book-item" data-genre="fantasy">
    <div class="book-cover-placeholder">✨</div>
    <div class="book-title">The Invisible Life of Addie LaRue</div>
    <div class="book-author">V.E. Schwab</div>
    <span class="book-genre">Fantasy</span>
    <span class="status-badge status-completed">Completed</span>
  </div>

  <div class="book-item" data-genre="fantasy">
    <div class="book-cover-placeholder">🌊</div>
    <div class="book-title">The House in the Cerulean Sea</div>
    <div class="book-author">T.J. Klune</div>
    <span class="book-genre">Fantasy</span>
    <span class="status-badge status-completed">Completed</span>
  </div>

  <div class="book-item" data-genre="classics">
    <div class="book-cover-placeholder">💍</div>
    <div class="book-title">Pride and Prejudice</div>
    <div class="book-author">Jane Austen</div>
    <span class="book-genre">Classics</span>
    <span class="status-badge status-completed">Completed</span>
  </div>

  <div class="book-item" data-genre="classics">
    <div class="book-cover-placeholder">👁️</div>
    <div class="book-title">1984</div>
    <div class="book-author">George Orwell</div>
    <span class="book-genre">Classics</span>
    <span class="status-badge status-completed">Completed</span>
  </div>
</div>

## Featured Collections

### Currently Reading
- **The Midnight Library** by Matt Haig
- **Project Hail Mary** by Andy Weir
- **Klara and the Sun** by Kazuo Ishiguro

### Recent Favorites
- **Piranesi** by Susanna Clarke
- **The Invisible Life of Addie LaRue** by V.E. Schwab
- **The House in the Cerulean Sea** by T.J. Klune

### Classics Corner
- **Pride and Prejudice** by Jane Austen
- **1984** by George Orwell
- **To Kill a Mockingbird** by Harper Lee

## Reading Goals 2024

- **Target**: 100 books
- **Current Progress**: 89/100
- **Genres to Explore**: More non-fiction, historical fiction
- **Pages Read**: 28,450

<div class="reading-progress-bar">
  <div class="reading-progress-fill" style="width: 89%"></div>
</div>

<script>
function filterBooks(genre) {
  const books = document.querySelectorAll('.book-item');
  const buttons = document.querySelectorAll('.filter-btn');
  
  // Update active button
  buttons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.toLowerCase().includes(genre)) {
      btn.classList.add('active');
    }
  });
  
  // Filter books
  books.forEach(book => {
    if (genre === 'all' || book.dataset.genre === genre) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
}
</script>

<style>
.book-cover-placeholder {
  font-size: 3rem;
  margin-bottom: 1rem;
}
</style>