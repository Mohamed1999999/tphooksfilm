import React from 'react';

const MovieCard = ({posterUrl,title,description,rating, linkvideo}) => {
    return (
        <div className='movie-card'>
            <img src={posterUrl} alt={title}/>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{rating}</p>
            <a href={linkvideo} target='blank' >Voir la bande annonce</a>
        </div>
    );
};

export default MovieCard;