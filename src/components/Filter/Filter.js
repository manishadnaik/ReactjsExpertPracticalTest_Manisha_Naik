import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const Filter = () => {
  const [filterBy, setFilterBy] = React.useState('');

  const handleChange = (event) => {
    setFilterBy(event.target.value);
  };

  return (
    <div>
      <FormControl
        variant='standard'
        sx={{ m: 1, minWidth: 120 }}
        style={{ color: 'white' }}
      >
        <InputLabel
          id='demo-simple-select-standard-label'
          style={{ color: 'white' }}
        >
          Filter By Movie
        </InputLabel>
        <Select
          labelId='demo-simple-select-standard-label'
          id='demo-simple-select-standard'
          value={filterBy}
          onChange={handleChange}
          label='Filter By'
          style={{ color: 'inherit' }}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Name'}>Name</MenuItem>
          <MenuItem value={'Category'}>Category</MenuItem>
          <MenuItem value={'Tags'}>Tags</MenuItem>
          <MenuItem value={'Genres'}>Genres</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
