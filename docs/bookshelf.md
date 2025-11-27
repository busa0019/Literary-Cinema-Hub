# Digital Bookshelf

Explore my personal collection of books with interactive filtering and search.

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

  <div class="book-item" data-genre="romance">
    <div class="book-cover-placeholder">🚀</div>
    <div class="book-title">The Love Hypothesis</div>
    <div class="book-author">Ali Hazelwood</div>
    <span class="book-genre">Romance</span>
    <span class="status-badge status-completed">Completed</span>
  </div>

  <div class="book-item" data-genre="non-fiction">
    <div class="book-cover-placeholder">🚀</div>
    <div class="book-title">Atomic Habits</div>
    <div class="book-author">James Clear</div>
    <span class="book-genre">Non-Fiction</span>
    <span class="status-badge status-reading">Reading</span>
  </div>

   <div class="book-item" data-genre="mystery">
    <div class="book-cover-placeholder">🚀</div>
    <div class="book-title">The Silent Patient</div>
    <div class="book-author">Alex Michaelides</div>
    <span class="book-genre">Mystery</span>
    <span class="status-badge status-completed">Reading</span>
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


## Featured Collections 🏆
<div class="authors-grid">
  <div class="book-card">    
    <h3>Currently Reading</h3>
    <ul>
      <li><b>The Midnight Library</b> by Matt Haig</li>
      <li><b>Atomic Habits</b> by James Clear</li>
      <li><b>Klara and the Sun</b> by Kazuo Ishiguro</li>
    </ul>
  </div>
  <div class="book-card classic">    
    <h3>Recent Favorites</h3>
    <ul>
      <li><b>Piranesi</b> by Susanna Clarke</li>
      <li><b>The Invisible Life of Addie LaRue</b> by V.E. Schwab</li>
      <li><b>The House in the Cerulean Sea</b> by T.J. Klune</li>
    </ul>
  </div>
  <div class="book-card">    
    <h3>Classics Corner</h3>
    <ul>
      <li><b>Pride and Prejudice</b> by Jane Austen</li>
      <li><b>1984</b> by George Orwell</li>
      <li><b>To Kill a Mockingbird</b> by Harper Lee</li>
    </ul>
  </div>
</div>
<div class="book-card classic">
  <h3>2025 Reading Goals</h3>
  <ul>    
    <li><b>Target</b>: 100 books</li>
    <li><b>Current Progress</b>: 89/100</li>
    <li><b>Genres to Explore</b>: More non-fiction, historical fiction</li>
    <li><b>Pages Read</b>: 28,450</li>
  </ul>
  
  <p><b>Goal Completion Progress (89%)</b></p>
  <div class="reading-progress-bar">
    <div class="reading-progress-fill" style="width: 89%"></div>
  </div>
</div>