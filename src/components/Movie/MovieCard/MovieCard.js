import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
// import Link from '@mui/material/Link';

export const MovieCard = ({ movie }) => {
  return (
    <Grid item xs={12} md={4} lg={3}>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          // minHeight: 400,
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component='img'
            alt='green iguana'
            height='140'
            image={movie.src}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div' noWrap={true}>
              {movie.Film}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {movie.text}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton size='small'>Ratings: {movie.ratings} Star</IconButton>
            <Button size='small'>
              <Link to={`/details/${movie.id}`} underline='none' movie={movie}>
                Learn More
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </Grid>
  );
};
