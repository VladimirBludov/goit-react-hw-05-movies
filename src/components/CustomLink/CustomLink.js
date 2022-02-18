import { useMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledLink } from './CustomLink.styles';

CustomLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node.isRequired),
    PropTypes.node.isRequired,
  ]),
  to: PropTypes.string.isRequired,
};

export default function CustomLink({ children, to, ...props }) {
  const match = useMatch(`goit-react-hw-05-movies/${to}`);

  return (
    <StyledLink to={to} active={match} {...props}>
      {children}
    </StyledLink>
  );
}
