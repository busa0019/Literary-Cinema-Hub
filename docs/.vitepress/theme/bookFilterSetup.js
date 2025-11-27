/**
 * Filters the book items displayed based on the selected genre.
 */
window.filterBooks = function(genre) {
    const books = document.querySelectorAll('.book-item');
    const buttons = document.querySelectorAll('.filter-btn');

    if (books.length === 0 || buttons.length === 0) return;

    // 1. Update active button state
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    const clickedButton = Array.from(buttons).find(btn => 
        btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${genre}'`)
    );

    if (clickedButton) {
        clickedButton.classList.add('active');
    }

    // 2. Filter books visibility
    books.forEach(book => {
        const bookGenre = book.dataset.genre;

        if (genre === 'all' || bookGenre === genre) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
};

/**
 * Initializes the filter to 'All' on load/navigation.
 */
function initializeFilter() {
    if (document.querySelector('.filter-buttons')) {
        window.filterBooks('all');
    }
}

export { initializeFilter };