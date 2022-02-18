import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: ${({ active }) => (active ? 'gold' : 'white')};
`;
