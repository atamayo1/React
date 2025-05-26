import { useState } from 'react'
import './MovieApp.css'

export const MovieApp = () => {
    const urlBase = 'https://api.themoviedb.org/3/search/'; //movie?query=Jack+Reacher&api_key=00f13a2471b9cafa559f3a3206a75f57
    const apiKey = 'fe25e6d70b2282283825195229c4c625';
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);

    const handleGetMovies = async () => {
        try {
            const response = await fetch(`${urlBase}movie?query=${search}&api_key=${apiKey}`);
            const data = await response.json();
            console.log(data);
            setMovies(data.results);
        } catch (error) {
            console.error(error);
            setMovies([])
        }
    }

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSearch = ((e) => {
        e.preventDefault();
        console.log(search);
        handleGetMovies();
    });

    return (
        <div className='container'>
            <h1 className='title'>Search of Movies</h1>
            <form action="GET" onSubmit={handleSearch}>
                <input type="text" name="search" placeholder='Enter a movie' onChange={handleInputChange} />
                <button type='submit'>Search</button>
            </form>
            <div className='movie-list'>
                {
                    movies.length > 0
                        ? movies.map(movie => (
                            <div className='movie-card' key={movie.id}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                                <h2>{movie.title}</h2>
                                <p>{movie.overview}</p>
                            </div>
                        ))
                        : <p>There are not movies</p>
                }
            </div>

        </div>
    )
}
