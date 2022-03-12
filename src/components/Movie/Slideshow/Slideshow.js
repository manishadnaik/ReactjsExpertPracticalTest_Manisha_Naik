import React from 'react';

import { useQuery, gql } from '@apollo/client';
import images from '../../Slider/images';
import { Slider } from '../../Slider/Slider';

const Slideshow = () => {
  const { loading, error, data } = useQuery(gql`
    {
      movies {
        Film
        Genre
        ratings
        Profitability
        Year
        src
        text
        releasedDate
      }
    }
  `);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :</p>;
  }

  return (
    <div>
      {/* @todo: load from server */}
      <Slider images={data.movies} />
    </div>
  );
};

export default Slideshow;
