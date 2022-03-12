import { useQuery, gql } from '@apollo/client';
import { Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { GET_UPCOMING_MOVIES } from '../../../graphql/Queries';
import { MovieCard } from '../MovieCard/MovieCard';

const Upcoming = ({ client }) => {
  // const { loading, error, data, refetch } = useQuery(gql`
  //   query GetUpcomingMovies($input: MovieReleaseFilter) {
  //     getUpcomingMovies(input: $input) {
  //       Film
  //     }
  //   }
  // `);
  const { loading, error, data, refetch } = useQuery(GET_UPCOMING_MOVIES, {
    variables: {
      input: {
        releasedDate: '2019-07-20T17:30:15+05:30',
      },
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error : {error.message}</p>;
  }
  //    result =
  //   useEffect(async () => {
  //     const result = await client.query({
  //       query: GET_UPCOMING_MOVIES,
  //       variables: {
  //         input: {
  //           releasedDate: '2019-07-20T17:30:15+05:30',
  //         },
  //       },
  //     });
  //     // refetch({
  //     //   input: {
  //     //     releasedDate: '2019-07-20T17:30:15+05:30',
  //     //   },
  //     // });
  //   }, []);

  return (
    <>
      <Grid container spacing={3}>
        {data.getUpcomingMovies.map((movie, index) => {
          return <MovieCard movie={movie} key={index} />;
        })}
      </Grid>
    </>
  );
};

export default Upcoming;
