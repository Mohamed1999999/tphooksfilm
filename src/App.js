import React, { useState } from "react";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
import MovieCard from "./Components/MovieCard";
import "./Components/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
      rating: 9.5,
      linkvideo:
        "https://www.google.com/search?q=prison+break+youtube&oq=prison+break+youtube&aqs=chrome..69i57.6722j0j7&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:72a3d887,vid:NKebNZ5PaaY",
    },
    {
      id: 2,
      title: "Top Boy",
      description:
        "Dans les lotissements de l'est de Londres, le trafiquant de drogue Dushane est déterminé à devenir le Top Boy de la région et l'adolescent Ra'Nell est contraint de gagner en maturité suite à la rupture de sa mère.",
      posterURL:
        "https://fr.web.img5.acsta.net/pictures/19/09/16/15/16/3724408.jpg",
      rating: 8.2,
      linkvideo: "https://www.youtube.com/watch?v=BYLYZ7OsymE",
    },
    {
      id: 3,
      title: "La pirogue",
      description:
        "Dans une un quartier de pécheurs, au milieu de Dakar, des jeunes désespérés cherchent à rejoindre l'Europe mais rencontrent beaucoup de problémes au milieu de l'Atlantique ",
      posterURL:
        "data:image/jpeg;base64,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",
      rating: 8.2,
      linkvideo: "https://www.youtube.com/watch?v=Tbg140PT2Hk",
    },
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
      <Router>
        <Switch>
          <Route path="/" exact component={MovieCard} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
