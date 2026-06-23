//import React from 'react';
import '../styles.css';
import MovieCard from './MovieCard';

export default function Watchlist({movies,watchlist,toggleWatchlist}){
    return(
        <div>
            <h1 className='title'>Your Watchlist</h1>
            <div className='watchlist'>
                {
                    watchlist.map(id => {
                        const movie = movies.find(movie => movie.id === id);
                        //Updated Watchlist.jsx to skip rendering a MovieCard when the corresponding movie is undefined (prevents runtime errors when movies hasn't loaded yet).
                        if(!movie) return null;
                        return <MovieCard key={id} movie={movie} toggleWatchlist={toggleWatchlist} isWatchlisted={true} />
                    })
                }

            </div>
        </div>
    )
}