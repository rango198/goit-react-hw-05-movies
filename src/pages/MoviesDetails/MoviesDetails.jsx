import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchDetailsMovie } from '../../service/API';

import {
  Wrap,
  Img,
  Container,
  Links,
  WrapContainer,
} from './MoviesDetails.styled';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MoviesDetails = () => {
  const [moviesDetails, setMoviesDetails] = useState({});

  const { movieId } = useParams();
  const location = useLocation();
  const backRef = useRef(location.state?.from ?? '/movies');
  console.log(location);
  useEffect(() => {
    fetchDetailsMovie(movieId).then(setMoviesDetails);
  }, [movieId]);

  const { poster_path, title, genres, overview, vote_average, release_date } =
    moviesDetails;

  return (
    <>
      <Links to={backRef.current}>{'Come back'}</Links>

      <Wrap>
        <WrapContainer>
          <Img
            src={
              poster_path
                ? `http://image.tmdb.org/t/p/w342${poster_path}`
                : defaultImg
            }
            alt={title}
          />
        </WrapContainer>
        <div>
          {title && (
            <h2>
              {title} {release_date.substr(0, 4)}
            </h2>
          )}

          <p>User Score: {vote_average && Math.floor(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          {genres && <p>{genres.map(({ name }) => name).join(', ')}</p>}
        </div>
      </Wrap>

      <Container>
        <h3>Additional information</h3>
        <li>
          <Links to="cast">Cast</Links>
        </li>
        <li>
          <Links to="reviews">Reviews</Links>
        </li>
      </Container>

      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Outlet />
      {/* </Suspense> */}
    </>
  );
};

export default MoviesDetails;
