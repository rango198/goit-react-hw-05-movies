import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';

import Loader from 'components/Loader/Loader';
import { fetchFilters, fetchSearchMovies } from 'service/API';
import FilterGenres from 'components/FilterGenre/FilterGenre';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [selectedGenre, setSelectedGenre] = useState(null);

  const moviesName = searchParams.get('query') ?? '';

  const handleOnSubmit = query => {
    const changeParams = query !== '' ? { query } : {};
    setSearchParams(changeParams);
  };

  useEffect(() => {
    if (!moviesName) return;

    setLoading(true);
    fetchSearchMovies(moviesName)
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [moviesName]);

  useEffect(() => {
    if (!selectedGenre) return;

    setLoading(true);
    fetchFilters(selectedGenre)
      .then(results => {
        setMovies(results);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [selectedGenre]);

  return (
    <>
      {error && <h2>{error.message}</h2>}
      <SearchForm value={moviesName} onSearch={handleOnSubmit} />
      <FilterGenres onSelect={setSelectedGenre} />
      {movies.length > 0 && <MoviesList movies={movies} />}
      {loading && <Loader />}
    </>
  );
};

export default Movies;
