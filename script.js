// Function to create a movie item in the movie menu
function createMovieItem(movie) {
    const { id, title } = movie;
  
    const li = document.createElement('li'); // Create a new list item element
    li.classList.add('film', 'item'); // Add CSS classes to the list item
    li.textContent = title; // Set the movie title as the text content of the list item
    li.addEventListener('click', () => {
      displayMovieDetails(movie); // Call the displayMovieDetails function with the movie object as an argument
    });
  
    return li; // Return the created list item
  }
  
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
  
    // Show or hide the "Sold Out" message
    const soldOutMessage = document.getElementById('sold-out-message');
    if (availableTickets === 0) {
      soldOutMessage.style.display = 'block';
    } else {
      soldOutMessage.style.display = 'none';
    }
  }
  
  // Function to buy a ticket for the selected movie
  function buyTicket(movie) {
    const { id, tickets_sold, capacity } = movie;
    const availableTickets = capacity - tickets_sold;
  
    if (availableTickets > 0) {
      // Update the tickets_sold count
      movie.tickets_sold += 1;
  
      // Update the availableTickets element on the web page
      const movieAvailableTicketsElement = document.getElementById('movie-available-tickets');
      movieAvailableTicketsElement.textContent = availableTickets - 1;
  
      // Disable the Buy Ticket button if all tickets are sold out
      const buyTicketButton = document.getElementById('buy-ticket-btn');
      buyTicketButton.disabled = availableTickets === 1;
  
      // Show or hide the "Sold Out" message
      const soldOutMessage = document.getElementById('sold-out-message');
      if (availableTickets === 1) {
        soldOutMessage.style.display = 'block';
      } else {
        soldOutMessage.style.display = 'none';
      }
    }
  }
  
  // Fetch movie data and populate the movie menu
  fetch('db.json')
    .then(response => response.json())
    .then(data => {
      const films = data.films;
  
      const filmList = document.getElementById('films');
      films.forEach(movie => {
        const movieItem = createMovieItem(movie);
        filmList.appendChild(movieItem);
      });
  
      // Display the details of the first movie by default
      if (films.length > 0) {
        displayMovieDetails(films[0]);
      }
    });
  