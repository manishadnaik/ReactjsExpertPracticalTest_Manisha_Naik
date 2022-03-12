import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Field, reduxForm } from 'redux-form';
import { renderTextField } from '../../utils/reduxForm';
import Submit from './Submit';
import { useDispatch } from 'react-redux';

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const required = (value) =>
  value || typeof value === 'number' ? undefined : 'Required';
const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
export const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);

function SignInSide(props) {
  const { error, handleSubmit, pristine, reset, submitting, history } = props;
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={theme}>
      <Grid container component='main' sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>
            <form onSubmit={handleSubmit(Submit, dispatch, history)}>
              <Box noValidate sx={{ mt: 1 }}>
                <Field
                  name='username'
                  type='text'
                  component={renderTextField}
                  label='Username'
                  margin='normal'
                  fullWidth
                  validate={[required, maxLength15, minLength2]}
                />
                <Field
                  name='password'
                  type='password'
                  component={renderTextField}
                  label='Password'
                  margin='normal'
                  fullWidth
                />
                {error && <strong>{error}</strong>}
                <br />
                <FormControlLabel
                  control={<Checkbox value='remember' color='primary' />}
                  label='Remember me'
                />
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href='#' variant='body2'>
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href='#' variant='body2'>
                      Don\'t have an account? Sign Up
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default reduxForm({
  form: 'simple', // a unique identifier for this form
  //   validate,
  //   warn,
})(SignInSide);
