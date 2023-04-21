const songs = [
  'Teri Duniya Se Hoke Majboor Chala (Pavitra Paapi)',
  'Bandeya (Dil Juunglee)',
  'Jag Soona Soona Laage (Om Shanti Om)',
  'Tune Jo Na Kaha (New York)',
  'Tadap Tadap (Hum Dil De Chuke Sanam)',
  'Saiyaan (Gunday)',
  'Hum Bewafa (Shalimar)',
  'Ab Tere Bin (Aashiqui)',
  'Chahunga Main Tujhe (Dosti)',
  'Dil Aisa Kisi (Amanush)'
];

const books = [
  'The Bell Jar by Sylvia Plath',
  'A Little Life by Hanya Yanagihara',
  'The Fault in Our Stars by John Green',
  'The Kite Runner by Khaled Hosseini',
  'Never Let Me Go by Kazuo Ishiguro',
  'The Overstory by Richard Powers',
  'The Road by Cormac McCarthy',
  'The Great Gatsby by F. Scott Fitzgerald',
  'The Catcher in the Rye by J.D. Salinger',
  'To Kill a Mockingbird by Harper Lee'
];

const movies = [
  'The Elephant Man (1980)',
  'The Green Mile (1999)',
  'Grave of the Fireflies (1988)',
  'Life is Beautiful (1997)',
  'Schindler\'s List (1993)',
  'The Shawshank Redemption (1994)',
  'The Godfather (1972)',
  'The Godfather: Part II (1974)',
  'Forrest Gump (1994)',
  'The Silence of the Lambs (1991)'
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
