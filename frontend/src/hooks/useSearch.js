import { useCallback, useState } from 'react';
import { GIPHY_APY_KEY } from '../constants/config';
import { debounce } from 'lodash';

const SEARCH_ENDPOINT = 'http://api.giphy.com/v1/gifs/search';
const PAGINATION_PAGE_SIZE = 20;
const useSearch = () => {
  const [images, setImages] = useState([]);
  const [searchText, setSearchText] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchImages = async (props) => {
    const { isPaginating, text } = props ?? {};

    try {
      setLoading(true);
      const result = await fetch(
        `${SEARCH_ENDPOINT}?${new URLSearchParams({
          api_key: GIPHY_APY_KEY,
          q: text ?? searchText,
          offset: images.length ?? 0,
          limit: PAGINATION_PAGE_SIZE,
        })}`,
      );

      const { data, pagination } = await result.json();

      setImages((prevImages) =>
        isPaginating ? [...prevImages, ...data] : data,
      );
      debugger;
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  const onSearch = () => {
    fetchImages({ searchText });
  };
  const loadMore = () => {
    fetchImages({ isPaginating: true });
  };
  const clearSearch = () => {
    setImages([]);
    setSearchText('');
  };

  return {
    images,
    searchText,
    onSearch,
    loading,
    error,
    loadMore,
    setSearchText,
    clearSearch,
  };
};

export default useSearch;
