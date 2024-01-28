import PropTypes from 'prop-types';
import { Outlet, useLocation } from 'react-router-dom';
import { List, Li, Links, Card, Img } from './MoviesList.styled';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <List>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <Li key={id}>
              <Links to={`/movies/${id}`} state={{ from: location }}>
                <Card>
                  <Img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w154/${poster_path}`
                        : defaultImg
                    }
                    alt={title}
                    width="250"
                    height="350"
                  />
                  <p>{title}</p>
                </Card>
              </Links>
            </Li>
          );
        })}
      </List>
      <Outlet />
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;
