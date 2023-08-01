import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({movies}) => {
    return (
        <div className='movie-list'>
            {movies.map((movie)=>(
                <MovieCard key={movie.id}
                 title={movie.title} 
                description={movie.description}
                 rating={movie.rating}/>
            ))};
        </div>
    );
};

export default MovieList;