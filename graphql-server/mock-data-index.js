// const { ApolloServer, gql } = require('apollo-server');
const { uuid } = require('uuidv4');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const {
  GraphQLUpload,
  graphqlUploadExpress, // A Koa implementation is also exported.
} = require('graphql-upload');
const { mkdir, createWriteStream } = require('fs');
const path = require('path');
const fs = require('fs');
const MoviesAPI = require('./DataSource/movies-api');
// const { finished } = require('stream/promises');

const findUpcomingMovies = (releasedDate, movie) => {
  const newDate = new Date();
  const movieDate = new Date(movie.releasedDate);

  return movieDate >= newDate;
};

const findNewMovies = (releasedDate, movie) => {
  const lastRelease = new Date(releasedDate);
  const newDate = new Date(lastRelease.setMonth(lastRelease.getMonth() - 3));
  const movieDate = new Date(movie.releasedDate);

  return (movieDate <= new Date(releasedDate)) & (movieDate >= newDate);
};

const getMoviePictures = (movieId) => {
  const directoryPath = path.join(__dirname, `images/movies/movie-${movieId}`);
  const filenames = fs.readdirSync(directoryPath);
  //listing all files using forEach
  // files.forEach(function (file) {
  //   // Do whatever you want to do with the file
  //   console.log(file);
  // });
  // });

  return filenames;
};
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Movie" type defines the queryable fields for every Movie in our data source.
  type Movie {
    id: Int
    Film: String
    Genre: String
    ratings: Float
    Profitability: Float
    Year: Int
    src: String
    text: String
    releasedDate: String
    cast: String
    tags: String
    videos: String
    pictures: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "movies" query returns an array of zero or more movies (defined above).

  type Mutation {
    movieCreated(
      id: Int
      Film: String!
      Genre: String
      ratings: Float
      Profitability: Float
      Year: Int
      src: String
      text: String
      releasedDate: String
      cast: String
      tags: String
      videos: String
      pictures: String
    ): Movie!
  }

  input MovieInputFilter {
    Genre: String
  }

  input MovieReleaseFilter {
    releasedDate: String
  }

  input MovieIdFilter {
    id: Int
  }

  input MovieSearchFilters {
    Genre: String
    Film: String
    Year: Int
    text: String
    cast: String
    tags: String
  }

  input MovieSearchInput {
    filter: MovieSearchFilters
  }

  type Query {
    movies: [Movie]
    getMovieByGenre(input: MovieInputFilter): [Movie]
    getNewMovies(input: MovieReleaseFilter): [Movie]
    getUpcomingMovies(input: MovieReleaseFilter): [Movie]
    getMovieDetails(input: MovieIdFilter): Movie
    searchedMovies(input: MovieSearchInput): [Movie]
  }

  scalar Upload

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Query {
    # This is only here to satisfy the requirement that at least one
    # field be present within the 'Query' type.  This example does not
    # demonstrate how to fetch uploads back.
    otherFields: Boolean!
  }
  type Mutation {
    # Multiple uploads are supported. See graphql-upload docs for details.
    singleUpload(file: Upload!): File!
  }
`;

// @todo: data import from json
// https://javascript.plainenglish.io/sourcing-json-data-with-gatsby-source-filesystem-and-graphql-6fc7cef2a49e
const movies = [
  {
    id: 1,
    Film: 'What Happens in Vegas',
    Genre: 'Comedy',
    ratings: 5,
    Profitability: 1.747541667,
    Year: 2008,
    src: 'https://drive.google.com/uc?id=1_oA9Sx4D4DhFrYBFQdL0I1CUIz_LhQue',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse',
    releasedDate: '2022-03-03T17:30:15+05:30',
    cast: JSON.stringify([
      'Alan Marriott',
      'Andrew Toth',
      'Brian Dobson',
      'Cole Howard',
      'Jennifer Cameron',
      'Jonathan Holmes',
      'Lee',
    ]),
    tags: JSON.stringify(['nice', 'comedy', 'emotions']),
    videos: JSON.stringify([
      'https://www.youtube.com/watch?v=NLdkkpMrZIY',
      'https://www.youtube.com/watch?v=giRIiq_uOFY',
    ]),
  },
  {
    id: 2,
    Film: 'Youth in Revolt',
    Genre: 'Comedy',
    ratings: 2,
    Profitability: 1.09,
    Year: 2010,
    src: 'https://drive.google.com/uc?id=1rJFs-8So16UCiDag__hG4yyf_RnC08Fa',
    text: 'Consectetur adipisicing elit cillum dolore eu fugiat nulla',
    releasedDate: '2022-07-20T17:30:15+05:30',
    cast: JSON.stringify(['Jandino Asporaat']),
  },
  {
    id: 3,
    Film: 'You Will Meet a Tall Dark Stranger',
    Genre: 'Comedy',
    ratings: 4,
    Profitability: 1.211818182,
    Year: 2010,
    src: 'https://drive.google.com/uc?id=1HO2AGjd_1yyYI4pYTTBmGXBaWHoGSqCl',
    text: 'Asperiores ex animi explicabo cillum dolore eu fugiat nulla',
    releasedDate: '2022-03-03T17:30:15+05:30',
    cast: JSON.stringify([
      'Peter Cullen',
      'Sumalee Montano',
      'Frank Welker',
      'Jeffrey Combs',
      'Kevin Michael Richardson',
      'Tania Gunadi',
    ]),
  },
  {
    id: 4,
    Film: 'Ironman',
    Genre: 'Thrill',
    ratings: 3.6,
    Profitability: 1.747541667,
    Year: 2008,
    src: 'https://drive.google.com/uc?id=1_oA9Sx4D4DhFrYBFQdL0I1CUIz_LhQue',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse',
    releasedDate: '2022-07-20T17:30:15+05:30',
    cast: JSON.stringify([
      'Nesta Cooper',
      'Kate Walsh',
      'John Michael Higgins',
      'Keith Powers',
      'Alicia Sanz',
      'Jake Borelli',
      'Kid Ink',
    ]),
  },
  {
    id: 5,
    Film: 'Water For Elephants',
    Genre: 'Drama',
    Profitability: 3.081421053,
    Year: 2011,
    ratings: 4.5,
    src: 'https://drive.google.com/uc?id=1_oA9Sx4D4DhFrYBFQdL0I1CUIz_LhQue',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse',
    releasedDate: '2022-07-20T17:30:15+05:30',
    cast: JSON.stringify([
      'Alberto Ammann',
      'Eloy Azorín',
      'Verónica Echegui',
      ' Lucía Jiménez',
    ]),
  },
  {
    id: 6,
    Film: 'WALL-E',
    Genre: 'Animation',
    Profitability: 2.896019067,
    Year: 2008,
    ratings: 2.5,
    src: 'https://drive.google.com/uc?id=1_oA9Sx4D4DhFrYBFQdL0I1CUIz_LhQue',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse',
    releasedDate: '2022-03-03T17:30:15+05:30',
    cast: JSON.stringify([
      'James Franco',
      'Kate Hudson',
      'Tom Wilkinson',
      'Omar Sy',
      'Sam Spruell',
      'Anna Friel',
    ]),
  },
  {
    id: 7,
    Film: 'Waiting For Forever',
    Genre: 'Romance',
    Profitability: 0.005,
    Year: 2011,
    ratings: 4.5,
    src: 'https://drive.google.com/uc?id=1_oA9Sx4D4DhFrYBFQdL0I1CUIz_LhQue',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse',
    releasedDate: '2022-07-20T17:30:15+05:30',
    cast: JSON.stringify(['Joaquín Reyes']),
  },
  {
    id: 8,
    // eslint-disable-next-line quotes
    Film: "Valentine's Day",
    Genre: 'Comedy',
    Profitability: 4.184038462,
    Year: 2010,
    ratings: 2.5,
    src: 'https://drive.google.com/uc?id=1_oA9Sx4D4DhFrYBFQdL0I1CUIz_LhQue',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse',
    releasedDate: '2022-03-03T17:30:15+05:30',
    cast: JSON.stringify([
      'Damandeep Singh Baggan',
      'Smita Malhotra',
      'Baba Sehgal',
    ]),
  },
];
const storeUpload = async ({ stream, filename, mimetype }) => {
  const id = uuid();
  const path = `images/${id}-${filename}`;
  // (createWriteStream) writes our file to the images directory

  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on('finish', () => resolve({ id, path, filename, mimetype }))
      .on('error', reject)
  );
};
const processUpload = async (upload) => {
  const { createReadStream, filename, mimetype } = await upload;
  const stream = createReadStream();
  const file = await storeUpload({ stream, filename, mimetype });

  return file;
};
const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    movies: () => movies,
    getMovieByGenre: (parent, args, context, info) => {
      // console.log('sent id', args.input.Genre);

      return movies.filter((movie) => movie.Genre === args.input.Genre);
    },

    // getMovieDetails1: (parent, args, context, info) => {
    //   const movie = movies.find((movie) => movie.id === args.input.id);
    //   movie['pictures'] = JSON.stringify(getMoviePictures(args.input.id));
    //   console.log(movie);

    //   return movie;
    // },
    getMovieDetails: (parent, args, { dataSources }, info) => {
      const movie = movies.find((movie) => movie.id === args.input.id);
      // movie['pictures'] = JSON.stringify(getMoviePictures(args.input.id));
      // console.log(movie);

      movie['pictures'] = dataSources.moviesAPI.getMovie(args.input.id);

      return movie;
    },
    getNewMovies: (parent, args, context, info) => {
      console.log('releasedDate=>', args.input.releasedDate);

      return movies.filter(findNewMovies.bind(this, args.input.releasedDate));
    },
    getUpcomingMovies: (parent, args, context, info) => {
      console.log('releasedDate=>', args.input.releasedDate);

      return movies.filter(
        findUpcomingMovies.bind(this, args.input.releasedDate)
      );
    },
    searchedMovies: (parent, args, context, info) => {
      const { filter } = args.input;
      console.log('filter==>', filter);
      const shouldApplyFilters = filter || false;

      if (!shouldApplyFilters) {
        return movies;
      }

      const shouldApplyGenreFilter = filter.Genre || false;
      console.log(
        'shouldApplyGenreFilter=>',
        shouldApplyGenreFilter,
        filter.Film,
        filter.Genre
      );
      const shouldApplyNameFilter = filter.Film !== 'undefined';
      console.log(shouldApplyGenreFilter, shouldApplyNameFilter);
      if (shouldApplyGenreFilter) {
        return movies.filter((a) =>
          a.Genre.toLocaleLowerCase().includes(filter.Genre.toLocaleLowerCase())
        );
      }

      if (shouldApplyNameFilter) {
        return movies.filter((a) =>
          a.Film.toLocaleLowerCase().includes(filter.Film.toLocaleLowerCase())
        );
      }

      return [];
    },
  },
  Mutation: {
    movieCreated: (
      parent,
      { Film, Genre, ratings, Profitability, Year, src, text }
    ) => {
      const id = uuid();
      const movie = {
        id,
        Film,
        Genre,
        ratings,
        Profitability,
        Year,
        src,
        text,
      };
      movies.push(movie);

      return movie;
    },
    singleUpload: async (parent, { file }) => {
      const { createReadStream, filename, mimetype, encoding } = await file;

      // Invoking the `createReadStream` will return a Readable Stream.
      // See https://nodejs.org/api/stream.html#stream_readable_streams
      const stream = createReadStream();
      // @todo: upload image for movie
      // Creates an images folder in the root directory
      mkdir('images', { recursive: true }, (err) => {
        if (err) {
          throw err;
        }
      });
      // Process upload
      const upload = await processUpload(file);
      // return upload;
      // const out = require('fs').createWriteStream('local-file-output.txt');
      // stream.pipe(out);
      // await finished(out);

      return { filename, mimetype, encoding };
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
// const server = new ApolloServer({ typeDefs, resolvers });

// // The `listen` method launches a web server.
// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        moviesAPI: new MoviesAPI(),
      };
    },
  });
  await server.start();

  const app = express();

  // This middleware should be added before calling `applyMiddleware`.
  app.use(graphqlUploadExpress());

  server.applyMiddleware({ app });

  await app.listen({ port: 4000 });

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startServer();

// in operations

// query Movies {
//   movies {
//     id
//     Film
//     Genre
//     ratings
//     Profitability
//     Year
//     src
//     text
//     releasedDate
//   }
// }

// mutation Mutation($film: String!, $genre: String, $ratings: Int, $profitability: Float, $year: Int) {
//   movieCreated(Film: "asdsadvas", Genre: "sdsgvasha", ratings: 2, Profitability: 34324, Year: 4000, src:"https://drive.google.com/uc?id=1rJFs-8So16UCiDag__hG4yyf_RnC08Fa", text: "new added") {
//     Film
//     Genre
//     ratings
//     Profitability
//     src
//     text
//   }
// }
// ==================

// mutation Mutation($film: String!, $genre: String, $ratings: Int, $profitability: Float, $year: Int) {
//   movieCreated(Film: "asdsadvas", Genre: "sdsgvasha", ratings: 2, Profitability: 34324, Year: 4000, src:"https://drive.google.com/uc?id=1rJFs-8So16UCiDag__hG4yyf_RnC08Fa", text: "new added") {
//     Film
//     Genre
//     ratings
//     Profitability
//     src
//     text
//   }
// }

// query Movies {
//   movies {
//     Film
//   }
// }

// query getMovieByGenre($input: MovieInputFilter) {
//   getMovieByGenre(input: $input) {
//     Film
//   }
// }

// query GetUpcomingMovies($getUpcomingMoviesInput2: MovieReleaseFilter) {
//   getUpcomingMovies(input: $getUpcomingMoviesInput2) {
//     Film
//   }
// }

// ==============
// {
//   "input": {
//     "Genre": "Comedy"
//   },
//   "getUpcomingMoviesInput2": {
//     "releasedDate": "2021-07-20T17:30:15+05:30"
//   }
// }
