
function initializeFilter() {
    

    window.filterBooks = function(genre) {
        const books = document.querySelectorAll('.book-item');
        const buttons = document.querySelectorAll('.filter-btn');

        if (books.length === 0 || buttons.length === 0) return;

        
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });

      
        const clickedButton = Array.from(buttons).find(btn => 
            btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${genre}'`)
        );

        if (clickedButton) {
     
            clickedButton.classList.add('active'); 
        }

      
        books.forEach(book => {
            const bookGenre = book.dataset.genre;

            if (genre === 'all' || bookGenre === genre) {
          
                book.style.display = ''; 
            } else {
                book.style.display = 'none';
            }
        });
    };


    window.filterBooks('all');

}

export { initializeFilter };