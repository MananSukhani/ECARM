const songs = [
  'Let’s Go Crazy by Prince',
  'I Got You (I Feel Good) by James Brown & The Famous Flames',
  'Don’t Stop Me Now by Queen',
  'Good as Hell by Lizzo',
  'Happy by Pharrell Williams',
  'Can\'t Stop the Feeling! by Justin Timberlake',
  'Uptown Funk by Mark Ronson ft. Bruno Mars',
  'September by Earth, Wind & Fire',
  'Shut Up and Dance by Walk the Moon',
  'Shape of You by Ed Sheeran'
];

const books = [
  'Born to Run by Christopher McDougall',
  'The Power of Now by Eckhart Tolle',
  'Into Thin Air by Jon Krakauer',
  'The Alchemist by Paulo Coelho',
  'Atomic Habits by James Clear',
  'The 7 Habits of Highly Effective People by Stephen R. Covey',
  'The Miracle Morning by Hal Elrod',
  'You Are a Badass by Jen Sincero',
  'Mindset by Carol S. Dweck',
  'Grit by Angela Duckworth'
];

const movies = [
  'The Avengers (2012)',
  'The Fast and the Furious (2001)',
  'The Matrix (1999)',
  'Kill Bill: Vol. 1 (2003)',
  'Die Hard (1988)',
  'Indiana Jones and the Raiders of the Lost Ark (1981)',
  'Rocky (1976)',
  'Mad Max: Fury Road (2015)',
  'Jurassic Park (1993)',
  'The Lion King (1994)'
];

function recommend() {
  const shuffledSongs = songs.sort(() => 0.5 - Math.random());
  const selectedSongs = shuffledSongs.slice(0, 3);
  const shuffledBooks = books.sort(() => 0.5 - Math.random());
  const selectedBooks = shuffledBooks.slice(0, 3);
  const shuffledMovies = movies.sort(() => 0.5 - Math.random());
  const selectedMovies = shuffledMovies.slice(0, 3);
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
