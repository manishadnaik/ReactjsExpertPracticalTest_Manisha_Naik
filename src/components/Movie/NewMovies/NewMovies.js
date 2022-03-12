import { useQuery, gql } from '@apollo/client';
import { Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { GET_NEW_MOVIES } from '../../../graphql/Queries';
import { MovieCard } from '../MovieCard/MovieCard';

const NewMovies = () => {
  // const { loading, error, data, refetch } = useQuery(gql`
  //   query GetUpcomingMovies($input: MovieReleaseFilter) {
  //     getUpcomingMovies(input: $input) {
  //       Film
  //     }
  //   }
  // `);
  const { loading, error, data, refetch } = useQuery(GET_NEW_MOVIES, {
    variables: {
      input: {
        releasedDate: new Date().toDateString(),
      },
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error : {error.message}</p>;
  }

  return (
    <>
      <Grid container spacing={3}>
        {data.getNewMovies.map((movie, index) => {
          return <MovieCard movie={movie} key={index} />;
        })}
      </Grid>
    </>
  );
};

export default NewMovies;
