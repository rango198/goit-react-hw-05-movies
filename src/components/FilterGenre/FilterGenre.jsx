import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { fetchGenresMovies } from 'service/API';

const FilterGenres = ({ onSelect }) => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getGenresMovies = async () => {
      try {
        const genresData = await fetchGenresMovies();

        setGenres(genresData);
      } catch (error) {
        setError(error);
      }
    };
    getGenresMovies();
  }, []);

  return (
    <>
      {' '}
      <select
        name="with_genres"
        onChange={event => onSelect(event.target.value)}
      >
        <option value="">Select Genres</option>
        {genres.map(genre => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
      {error &&
        toast.error('Ooops... Something went wrong. Please try again later!')}
    </>
  );
};

export default FilterGenres;
