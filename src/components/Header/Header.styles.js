import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: cornflowerblue;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  margin-right: 15px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 24px;
`;

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const Link = styled(NavLink)`
  color: white;
  &.active {
    color: gold;
  }
`;
