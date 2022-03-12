const { gql } = require('@apollo/client');

export const GET_NEW_MOVIES = gql`
  query GetUpcomingMovies($input: MovieReleaseFilter) {
    getNewMovies(input: $input) {
      id
      Film
      src
      text
      ratings
    }
  }
`;

export const GET_UPCOMING_MOVIES = gql`
  query GetUpcomingMovies($input: MovieReleaseFilter) {
    getUpcomingMovies(input: $input) {
      id
      Film
      src
      text
    }
  }
`;

export const GET_MOVIE_DETAILS = gql`
  query MovieDetails($input: MovieIdFilter) {
    getMovieDetails(input: $input) {
      id
      Film
      Genre
      src
      text
      cast
      tags
      videos
      pictures
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation SingleUpload($file: Upload!) {
    singleUpload(file: $file) {
      filename
      mimetype
      encoding
    }
  }
`;

export const UPLOAD_FILE_STREAM = gql`
  mutation SingleUploadStream($file: Upload!) {
    singleUploadStream(file: $file) {
      filename
      mimetype
      encoding
    }
  }
`;
export const SEARCH_DETAILS = gql`
  query searchedMovies($input: MovieSearchInput) {
    searchedMovies(input: $input) {
      id
      Film
      Genre
      src
      text
      cast
      tags
      videos
      pictures
    }
  }
`;
