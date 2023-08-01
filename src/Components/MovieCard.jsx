import React from 'react';

const MovieCard = ({posterUrl,title,description,rating}) => {
    return (
        <div className='movie-card'>
            <img src={posterUrl} alt={title}/>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{rating}</p>
        </div>
    );
};

export default MovieCard;