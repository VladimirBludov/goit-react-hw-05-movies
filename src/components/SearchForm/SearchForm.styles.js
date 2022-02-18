import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 15px;
`;

export const Input = styled.input.attrs({ type: 'search', name: 'search' })`
  width: 300px;
  padding: 5px;
  font-size: 20px;

  &:hover,
  &:focus {
    outline: 1px solid lightgreen;
  }
`;

export const ButtonSearch = styled.button`
  padding: 10px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  background-color: #ccc;
  color: #fff;
  font-size: 20px;

  &:hover,
  &:focus {
    background-color: lightgreen;
  }
`;
