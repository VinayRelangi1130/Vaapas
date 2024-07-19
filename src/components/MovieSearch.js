import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const MovieSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      axios.get(`https://openlibrary.org/search.json?q=${searchQuery}`)
        .then(response => {
          setMovies(response.data.docs);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [searchQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input type="search" value={searchQuery} onChange={handleSearch} placeholder="Search for a movie" />
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;