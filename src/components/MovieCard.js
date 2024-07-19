import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieCard = ({ movie }) => {
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        setDogImage(response.data.message);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Author: {movie.author_name.join(', ')}</p>
      <img src={moviePoster} alt="" />
    </div>
  );
};

export default MovieCard;