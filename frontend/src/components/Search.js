import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { debounce } from 'lodash';
import Button from '@mui/material/Button';
const Search = ({ searchText, onSearch, setSearchText, clearSearch }) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Search gifs"
        variant="outlined"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button
        variant="contained"
        onClick={() => onSearch(searchText)}
        disabled={!searchText}>
        Search
      </Button>
      <Button variant="outlined" onClick={clearSearch} disabled={!searchText}>
        Clear Search
      </Button>
    </Box>
  );
};

export default Search;
