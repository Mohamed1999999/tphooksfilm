import React, { useState } from "react";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
import "./Components/App.css";
import "topboy.webp";

const App = () => {
  const [movies, setMovies] = useState([
    // Initial movie data, you can start with an empty array as well
    {
      id: 1,
      title: "Prison Break",
      description:
        "Son frère injustement accusé de meurtre, un ingénieur en génie civil décide de le faire évader de prison.",
      posterURL:
        "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/loisirs/series/prison-break-pourrait-revenir-pour-une-nouvelle-saison-2956336/54662818-1-fre-FR/Prison-Break-pourrait-revenir-pour-une-nouvelle-saison.jpg",
      rating: 7.5,
    },
    {
      id: 2,
      title: "Top Boy",
      description:
        "Dans les lotissements de l'est de Londres, le trafiquant de drogue Dushane est déterminé à devenir le Top Boy de la région et l'adolescent Ra'Nell est contraint de gagner en maturité suite à la rupture de sa mère.",
      posterURL:
        "https://fr.web.img5.acsta.net/pictures/19/09/16/15/16/3724408.jpg",
      rating: 8.2,
    },
    // Add more movie objects as needed
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState("");

  const handleTitleFilterChange = (event) => {
    setTitleFilter(event.target.value);
  };

  const handleRateFilterChange = (event) => {
    setRateFilter(event.target.value);
  };

  const handleAddMovie = (newMovie) => {
    // Add the new movie to the movies array
    setMovies([...movies, newMovie]);
  };

  // Apply filters to the movie list
  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      (rateFilter === "" || parseFloat(rateFilter) === movie.rating)
    );
  });

  return (
    <div className="app">
      <h1>Movie Library</h1>
      <Filter
        titleFilter={titleFilter}
        rateFilter={rateFilter}
        onTitleFilterChange={handleTitleFilterChange}
        onRateFilterChange={handleRateFilterChange}
      />
      <MovieList movies={filteredMovies} />
      {/* Add a form or any input elements to allow the user to add a new movie */}
      {/* Example: <AddMovieForm onAddMovie={handleAddMovie} /> */}
    </div>
  );
};

export default App;
