import PropTypes from 'prop-types';
import { Container, Image, LinkStyled, Title } from './MoviesItem.styles';

export default function MoviesItem({ id, title, srcImage, from }) {
  return (
    <Container>
      <LinkStyled to={`/movies/${id}`} state={{ prevPath: from }}>
        <Image src={srcImage} alt={title} />
        <Title>{title}</Title>
      </LinkStyled>
    </Container>
  );
}

MoviesItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  srcImage: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
};
