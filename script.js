// Fetch movie data and populate the movie menu
fetch('db.json')
.then(response => response.json())
.then(data => {
    const films = data.films;

});