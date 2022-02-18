import PropTypes from 'prop-types';
import slugify from 'slugify';
import { Container, Image, LinkStyled, Title } from './MoviesItem.styles';

export default function MoviesItem({ id, title, srcImage, from }) {
  const makeSlag = () =>
    slugify(`${title} ${id}`, {
      lower: true,
    });

  const url = `/goit-react-hw-05-movies/movies/${makeSlag()}`;

  return (
    <Container>
      <LinkStyled to={url} state={{ prevPath: from }}>
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
