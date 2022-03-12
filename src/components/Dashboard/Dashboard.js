import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import DashboardLayout from '../Layout/DashboardLayout';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Upcoming from '../Movie/Upcoming/Upcoming';
import NewMovies from '../Movie/NewMovies/NewMovies';
import { Box, Toolbar, Container } from '@mui/material';
import { useQuery, gql } from '@apollo/client';
import images from '../Slider/images';
import Slideshow from '../Movie/Slideshow/Slideshow';

const Dashboard = (props) => {
  // const currentUser = useSelector((state) => state.auth.currentUser.user);
  return (
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
        }}
      >
        <Toolbar />

        <Container maxWidth='xl' sx={{}} style={{ padding: 0 }}>
          <Slideshow />
        </Container>
        <Box
          component='main'
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            // height: '100vh',
            // overflow: 'auto',
          }}
        >
          <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <h4>New Movies</h4>
                <NewMovies />
                <h4>Upcoming Movies</h4>
                <Upcoming />
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
          {props.children}
          <Copyright sx={{ pt: 4 }} />
        </Container> */}
      </Box>
    </DashboardLayout>
  );
};

export default connect(
  (state) => ({
    user: state.auth,
  }),
  (dispatch) => ({
    actions: bindActionCreators({}, dispatch),
  })
)(Dashboard);
