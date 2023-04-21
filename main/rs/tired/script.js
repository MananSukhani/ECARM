const songs = [
  "Weightless by Marconi Union",
  "Clair de Lune by Claude Debussy",
  "Nocturne in E-flat major, Op. 9 No. 2 by Frederic Chopin",
  "The Sea by Max Richter",
  "Spiegel im Spiegel by Arvo Pärt",
  "Adagio for Strings by Samuel Barber",
  "Gymnopédie No. 1 by Erik Satie",
  "Canon in D by Johann Pachelbel",
  "The Four Seasons by Antonio Vivaldi",
  "Moonlight Sonata by Ludwig van Beethoven"
];

const books = [
  "The Alchemist by Paulo Coelho",
  "The Little Prince by Antoine de Saint-Exupéry",
  "The Tao of Pooh by Benjamin Hoff",
  "The Prophet by Kahlil Gibran",
  "The Power of Now by Eckhart Tolle",
  "Man's Search for Meaning by Viktor E. Frankl",
  "The Art of Happiness by Dalai Lama XIV and Howard C. Cutler",
  "The Road Less Traveled by M. Scott Peck",
  "The Book of Joy by Dalai Lama XIV, Desmond Tutu, and Douglas Carlton Abrams",
  "The Heart of the Buddha's Teaching by Thich Nhat Hanh"
];

const movies = [
  "The Shawshank Redemption (1994)",
  "Forrest Gump (1994)",
  "The Green Mile (1999)",
  "Good Will Hunting (1997)",
  "Dead Poets Society (1989)",
  "The Pursuit of Happyness (2006)",
  "Into the Wild (2007)",
  "Life of Pi (2012)",
  "The Secret Life of Walter Mitty (2013)",
  "The Bucket List (2007)"
];

function recommend() {
  const songIndex = Math.floor(Math.random() * songs.length);
  const bookIndex = Math.floor(Math.random() * books.length);
  const movieIndex = Math.floor(Math.random() * movies.length);

  const song = songs[songIndex];
  const book = books[bookIndex];
  const movie = movies[movieIndex];

  const songElement = document.getElementById("songs");
  const bookElement = document.getElementById("books");
  const movieElement = document.getElementById("movies");

  songElement.innerHTML = `<p>${song}</p>`;
  bookElement.innerHTML = `<p>${book}</p>`;
  movieElement.innerHTML = `<p>${movie}</p>`;
}
