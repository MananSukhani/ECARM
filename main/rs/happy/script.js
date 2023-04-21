const songs = [
  'Let’s Go Crazy by Prince',
  'I Got You (I Feel Good) by James Brown & The Famous Flames',
  'Don’t Stop Me Now by Queen',
  'Good as Hell by Lizzo'
];

const books = [
  'Red, White & Royal Blue by Casey McQuiston',
  'Rough Magic by Lara Prior-Palmer',
  'The Happy Brain by Dean Burnett',
  'The Overdue Life of Amy Byler by Kelly Harms'
];

const movies = [
  'Aladdin (1992)',
  'The Princess Bride (1987)',
  'An American Tail (1986)',
  'Clueless (1995)'
];

function recommend() {
  const shuffledSongs = songs.sort(() => 0.5 - Math.random());
  const selectedSongs = shuffledSongs.slice(0, 3);
  const shuffledBooks = books.sort(() => 0.5 - Math.random());
  const selectedBooks = shuffledBooks.slice(0, 1);
  const shuffledMovies = movies.sort(() => 0.5 - Math.random());
  const selectedMovies = shuffledMovies.slice(0, 1);
  const songsDiv = document.getElementById('songs');
  const booksDiv = document.getElementById('books');
  const moviesDiv = document.getElementById('movies');
  songsDiv.innerHTML = '';
  booksDiv.innerHTML = '';
  moviesDiv.innerHTML = '';
  selectedSongs.forEach(song => {
    const songParagraph = document.createElement('p');
    songParagraph.textContent = song;
    songsDiv.appendChild(songParagraph);
  });
  selectedBooks.forEach(book => {
    const bookParagraph = document.createElement('p');
    bookParagraph.textContent = book;
    booksDiv.appendChild(bookParagraph);
  });
  selectedMovies.forEach(movie => {
    const movieParagraph = document.createElement('p');
    movieParagraph.textContent = movie;
    moviesDiv.appendChild(movieParagraph);
  });
}
