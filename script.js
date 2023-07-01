// Fetch movie data and populate the movie menu
fetch('db.json')
.then(response => response.json())
.then(data => {
    const films = data.films;

    const filmList = document.getElementById('films');
    films.forEach(movie => {
        const movieItem = createMovieItem(movie);
        filmsList.appendChild(movieItem);
      });

       // Display the details of the first movie by default
    if (films.length > 0) {
        displayMovieDetails(films[0]);
      }
});

// Function to create a movie item in the movie menu
function createMovieItem(movie) {
    const { id, title } = movie;
  
    const li = document.createElement('li');
    li.classList.add('film', 'item');
    li.textContent = title;
    li.addEventListener('click', () => {
      displayMovieDetails(movie);
    });
  
    return li;
  }
