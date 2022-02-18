import { MdLocalMovies } from 'react-icons/md';
import Container from 'components/Container';
import {
  StyledHeader,
  NavList,
  NavItem,
  Link,
  Nav,
  Logo,
  Wrapper,
} from './Header.styles';

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Wrapper>
          <Logo>
            <MdLocalMovies size="34" color="gold" />
          </Logo>
          <Nav>
            <NavList>
              <NavItem>
                <Link to="goit-react-hw-05-movies/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="goit-react-hw-05-movies/movies">Movies</Link>
              </NavItem>
            </NavList>
          </Nav>
        </Wrapper>
      </Container>
    </StyledHeader>
  );
}
