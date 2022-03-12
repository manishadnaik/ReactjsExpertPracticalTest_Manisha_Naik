import React, { useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import {
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useLazyQuery } from '@apollo/client';
import { SEARCH_DETAILS } from '../../graphql/Queries';
import { connect } from 'react-redux';
import { storeSearchResult } from '../../store/movie/actions';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: '10px',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchBox(props) {
  const [searchText, setSearchText] = React.useState('');
  const [search, { loading, error, data, refetch }] = useLazyQuery(
    SEARCH_DETAILS,
    {
      variables: {
        input: {
          filter: {
            Film: searchText,
          },
        },
      },
    }
  );
  const searchMovie = async () => {
    await search();
    props.storeSearchResult(data);
  };
  const handleSearch = (e) => {
    searchMovie();
  };

  useEffect(() => {
    searchMovie();
  }, []);

  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <React.Fragment>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          value={searchText}
          onChange={handleSearchInput}
          placeholder='Search…'
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      <IconButton aria-label='delete' onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
      {props.searchResults && (
        <div style={{ position: 'relative' }}>
          <nav
            aria-label='secondary mailbox folders'
            style={{
              position: 'fixed',
              right: '13.5%',
              top: '6.2%',
              width: '17.8%',
              fontSize: '0.8em',
            }}
          >
            <List c>
              {props.searchResults.map((res, index) => {
                return (
                  <ListItem disablePadding style={{ background: '#a2cef9' }}>
                    <ListItemButton>
                      <Link
                        to={`/details/${res.id}`}
                        style={{ color: 'white' }}
                      >
                        {res.Film}
                      </Link>
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </nav>
        </div>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    searchResults: state?.movie?.data?.searchedMovies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeSearchResult: (data) => {
      dispatch(storeSearchResult(data));
    },
  };
};
// @todo: to load new and upcoming movie from redux
export const SearchBoxWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
