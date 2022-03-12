import { useQuery } from '@apollo/client';
import React, { createContext, useContext, useState } from 'react';
import { GET_MOVIE_DETAILS } from '../graphql/Queries';

export const movieContext = createContext({
  movie: null,
  getMovie: () => {},
  getMovies: () => {},
});

const MOVIE = {};
export const GetMovie = (movieId) => {
  const { loading, error, data, refetch } = useQuery(GET_MOVIE_DETAILS, {
    variables: {
      input: {
        id: parseInt(movieId),
      },
    },
  });

  //   return { loading, error, data, refetch };
  <GetMovie loading={loading}></GetMovie>;
};

export function MovieContextProvider({ children }) {
  const [movie, setMovie] = useState(MOVIE);
  const [movieId, setMovieId] = useState('');

  function getMovie(movieId) {
    const { data } = GetMovie(movieId);
    setMovieId(movieId);
    setMovie(data);
  }
  function getMovies() {
    setMovie();
  }

  return (
    <movieContext.Provider value={{ movie, getMovie, getMovies }}>
      {children}
    </movieContext.Provider>
  );
}

export function useMovieContext() {
  const { movie, getMovie, getMovies } = useContext(movieContext);

  return { movie, getMovie, getMovies };
}
