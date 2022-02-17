import PropTypes from 'prop-types';
import MoviesItem from './MoviesItem';
import { Container } from './MoviesList.styles';

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default function MoviesList({ movies, from }) {
  const moviesListElements = movies.map(movie => (
    <MoviesItem
      key={movie.id}
      id={movie.id}
      title={movie['original_title']}
      srcImage={movie['poster_path']}
      from={from}
    />
  ));

  return <Container>{moviesListElements}</Container>;
}
