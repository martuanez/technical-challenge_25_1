import React from 'react';
import './App.css';
import Search from './components/Search';
import List from './components/List';
import useSearch from './hooks/useSearch';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const App = () => {
  const { images, searchText, setSearchText, onSearch, loadMore, clearSearch } =
    useSearch();

  return (
    <div className="App">
      <header className="App-header">
        <Search
          searchText={searchText}
          setSearchText={setSearchText}
          onSearch={onSearch}
          clearSearch={clearSearch}
        />
      </header>
      <List images={images} />

      {images.length > 0 ? (
        <Stack spacing={2} direction="row">
          <Button variant="outlined" onClick={clearSearch}>
            Clear Search
          </Button>

          <Button variant="contained" onClick={loadMore}>
            Load More
          </Button>
        </Stack>
      ) : null}
    </div>
  );
};

export default App;
