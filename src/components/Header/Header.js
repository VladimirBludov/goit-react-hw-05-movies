import { MdLocalMovies } from 'react-icons/md';
import Container from 'components/Container';
import {
  StyledHeader,
  NavList,
  NavItem,
  Nav,
  Logo,
  Wrapper,
} from './Header.styles';
import CustomLink from 'components/CustomLink';

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
                <CustomLink to="">Home</CustomLink>
              </NavItem>
              <NavItem>
                <CustomLink to="movies">Movies</CustomLink>
              </NavItem>
            </NavList>
          </Nav>
        </Wrapper>
      </Container>
    </StyledHeader>
  );
}
