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

const li = document.createElement('li'); // Create a new list item element
li.classList.add('film', 'item'); // Add CSS classes to the list item
li.textContent = title; // Set the movie title as the text content of the list item
li.addEventListener('click', () => { // Add a click event listener to the list item
  displayMovieDetails(movie); // Call the displayMovieDetails function with the movie object as an argument
});

return li; // Return the created list item

// Function to display the movie details
function displayMovieDetails(movie) {
    const { poster, title, runtime, showtime, tickets_sold, capacity } = movie;
    const availableTickets = capacity - tickets_sold;
  
    // Display the movie details on the web page
    const moviePosterElement = document.getElementById('movie-poster');
    moviePosterElement.src = poster;
  
    const movieTitleElement = document.getElementById('movie-title');
    movieTitleElement.textContent = title;
  
    const movieRuntimeElement = document.getElementById('movie-runtime');
    movieRuntimeElement.textContent = runtime;
  
    const movieShowtimeElement = document.getElementById('movie-showtime');
    movieShowtimeElement.textContent = showtime;
  
    const movieAvailableTicketsElement = document.getElementById('movie-available-tickets');
    movieAvailableTicketsElement.textContent = availableTickets;


  // Enable or disable the Buy Ticket button based on available tickets
  const buyTicketButton = document.getElementById('buy-ticket-btn');
  buyTicketButton.disabled = availableTickets === 0;

   // Add event listener to the Buy Ticket button
   buyTicketButton.addEventListener('click', () => {
    buyTicket(movie);
  });
  
   
}

