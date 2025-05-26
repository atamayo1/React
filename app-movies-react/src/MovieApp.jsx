import { useState } from 'react'
import './MovieApp.css'

export const MovieApp = () => {
    const urlBase = 'https://api.themoviedb.org/3/search/'; //movie?query=Jack+Reacher&api_key=00f13a2471b9cafa559f3a3206a75f57
    const apiKey = 'fe25e6d70b2282283825195229c4c625';
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [showDetail, setShowDetail] = useState(false);


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

    const handleViewDetail = (movie) => {
        setSelectedMovie(movie);
        setShowDetail(true);
    };

    const handleCloseDetail = () => {
        setSelectedMovie(null);
        setShowDetail(false);
    };


    return (
        <div className='container'>
            <h1 className='title'>Search of Movies</h1>
            <form action="GET" onSubmit={handleSearch}>
                <input type="text" name="search" placeholder='Enter a movie' onChange={handleInputChange} />
                <button type='submit'>Search</button>
            </form>
            <div className='movie-list'>
                {
                    movies &&
                    movies.map(movie => (
                        <div className='movie-card' key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                            <h2>{movie.title}</h2>
                            <p>{movie.overview}</p>
                            <button onClick={() => handleViewDetail(movie)}>View Detail</button>
                        </div>
                    ))
                }
            </div>
            {showDetail && selectedMovie && (
                <div className="modal-overlay" onClick={handleCloseDetail}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={handleCloseDetail}>×</button>
                        <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}`} alt={selectedMovie.title} />
                        <h2>{selectedMovie.title}</h2>
                        <p><strong>Release Date:</strong> {selectedMovie.release_date}</p>
                        <p>{selectedMovie.overview}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
