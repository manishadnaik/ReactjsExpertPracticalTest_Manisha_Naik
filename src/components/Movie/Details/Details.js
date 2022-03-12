import { useLazyQuery, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GET_MOVIE_DETAILS } from '../../../graphql/Queries';
import { Link, Container, Box, Toolbar, Grid, Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DashboardLayout from '../../Layout/DashboardLayout';
import Upcoming from '../Upcoming/Upcoming';
// import Title from './Title';
import ReactPlayer from 'react-player/youtube';
import { MovieModal } from '../../MovieModal/MovieModal';
import { styles } from '../../Slider/styles';
import { useMovieContext } from '../../../context/movieContext';
import { storeMovie } from '../../../store/movie/actions';
import { connect } from 'react-redux';

const Details = (props) => {
  const { movieId } = useParams();
  //   const { loading, error, data, refetch } = useQuery(GET_MOVIE_DETAILS, {
  //     variables: {
  //       input: {
  //         id: parseInt(movieId),
  //       },
  //     },
  //   });
  const [getMovie, { loading, error, data, refetch }] = useLazyQuery(
    GET_MOVIE_DETAILS,
    {
      variables: {
        input: {
          id: parseInt(movieId),
        },
      },
    }
  );

  const updateMovie = async () => {
    if (!props.movie) {
      await getMovie();
    }
    props.storeMovie(data);
  };

  useEffect(() => {
    updateMovie();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.log(error);

    return <p>Error :</p>;
  }
  if (data && data.getMovieDetails) {
    console.log(data.getMovieDetails);
  }
  //   props.storeMovie(data);
  console.log('from redux====>', props.movie);

  return data ? <MovieDetails data={data} /> : <>Loading...</>;
};

const mapStateToProps = (state) => {
  return {
    movie: state?.movie?.data?.getMovieDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeMovie: (data) => {
      dispatch(storeMovie(data));
    },
  };
};
// @todo: to load new and upcoming movie from redux
export const DetailsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);

export const MovieDetails = ({ data }) => {
  //   console.log('Movie details:', data);
  const pictures = JSON.parse(data.getMovieDetails.pictures);
  const [open, setOpen] = useState(false);
  const [modalSource, setModalSource] = useState('');
  const [mediaType, setMediaType] = useState();
  const handleOpen = (e, mediaType, source) => {
    setOpen(true);
    setModalSource(source || e.target.src);
    setMediaType(mediaType);
  };
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <DashboardLayout>
        <Box
          component='main'
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            backgroundSize: 'cover',
          }}
        >
          <Toolbar />
          <Container
            maxWidth='xl'
            sx={{}}
            style={{ padding: 0, ...styles.slider }}
          >
            <div
              style={{
                background: pictures.filenames[0]
                  ? `url(${pictures.baseUrl}${pictures.filenames[0]}) no-repeat`
                  : 'linear-gradient(140deg, #EADEDB 0%, #BC70A4 50%, #BFD641 75%)',
                height: '100vh',
                backgroundSize: 'cover',
                ...styles.sliderContent,
              }}
            >
              <div
                className='slider--feature'
                style={{ position: 'sticky', ...styles.sliderFeature }}
              >
                <h5
                  style={{
                    paddingLeft: 10,
                    textAlign: 'left',
                    ...styles.featureText,
                  }}
                >
                  Genre: {data.getMovieDetails.Genre}
                </h5>
                <h5
                  style={{
                    paddingLeft: 10,
                    textAlign: 'left',
                    ...styles.featureText,
                  }}
                >
                  Story Line: {data.getMovieDetails.text}
                </h5>
              </div>
            </div>
          </Container>
          <Box
            component='main'
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <h4>Pictures</h4>
                  <MovieModal
                    source={modalSource}
                    modalStatus={open}
                    handleClose={handleClose}
                    mediaType={mediaType}
                  />
                  {/* <img src={`${pictures.baseUrl}${pictures.filenames[0]}`} /> */}
                  <Grid container spacing={3}>
                    {pictures.filenames ? (
                      pictures.filenames.map((picture, index) => {
                        return (
                          <Grid item xs={12} md={4} lg={3} key={index}>
                            <Paper
                              sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                // minHeight: 400,
                              }}
                            >
                              <img
                                src={`${pictures.baseUrl}${picture}`}
                                height='100'
                                width='100%'
                                onClick={(e) => {
                                  handleOpen(e, 'image');
                                }}
                              />
                            </Paper>
                          </Grid>
                        );
                      })
                    ) : (
                      <Grid item xs={12} md={4} lg={3}>
                        <p>No videos uploaded</p>
                      </Grid>
                    )}
                  </Grid>
                  {/* <img
                      src={`http://localhost:9000/pictures/movie-1/123.jpeg`}
                    /> */}
                  <h4>Videos</h4>
                  <div>
                    {/* <ReactPlayer
                        url='https://www.youtube.com/watch?v=Wi9WoJeDaeA'
                        // light={`${pictures.baseUrl}${pictures.filenames[0]}`}
                        light={true}
                      /> */}
                    {/* <img
                      src={`${pictures.baseUrl}${pictures.filenames[0]}`}
                      height='100'
                      width='100%'
                      // mediaType='video'
                      onClick={(e) => {
                        handleOpen(
                          e,
                          'video',
                          'https://www.youtube.com/watch?v=Wi9WoJeDaeA'
                        );
                      }}
                    /> */}
                    <Grid container spacing={3}>
                      {data.getMovieDetails.videos ? (
                        JSON.parse(data.getMovieDetails.videos).map(
                          (video, index) => {
                            return (
                              <Grid item xs={12} md={4} lg={3} key={index}>
                                <Paper
                                  sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                  }}
                                >
                                  <img
                                    src={`${pictures.baseUrl}${pictures.filenames[0]}`}
                                    height='100'
                                    width='100%'
                                    onClick={(e) => {
                                      handleOpen(e, 'video', video);
                                    }}
                                  />
                                </Paper>
                              </Grid>
                            );
                          }
                        )
                      ) : (
                        <Grid item xs={12} md={4} lg={3}>
                          <p>No videos uploaded</p>
                        </Grid>
                      )}
                    </Grid>
                  </div>
                  <h4>Movie cast</h4>
                  <div>
                    {data.getMovieDetails.cast &&
                      JSON.parse(data.getMovieDetails.cast).join(', ')}
                  </div>
                  <h4>Taglines</h4>
                  <div>
                    {data.getMovieDetails.tags &&
                      JSON.parse(data.getMovieDetails.tags).join(', ')}
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </DashboardLayout>
    </React.Fragment>
  );
};
