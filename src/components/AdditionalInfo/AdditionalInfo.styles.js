import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 30px 15px;
`;

export const Title = styled.h3`
  font-size: 20px;
`;

export const List = styled.ul`
  margin-top: 15px;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Link = styled(NavLink)`
  color: cornflowerblue;
  &.active {
    color: gold;
  }
`;
