import styled from 'styled-components';

export const WrapperMovie = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  padding: 30px 15px;
`;

export const BackButton = styled.button`
  display: block;
  width: 100%;
  border: none;
  font-size: 20px;
  color: #fff;
  background-color: #ccc;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 15px 0;
  border-radius: 4px;
`;

export const Image = styled.img`
  width: 240px;

  box-shadow: 0 1px 4px black, -23px 0 20px -23px rgb(0 0 0 / 80%),
    23px 0 20px -23px rgb(0 0 0 / 80%), 0 0 40px rgb(0 0 0 / 10%) inset;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.15;
  color: #000000;
  margin-bottom: 20px;

  &:first-child {
    font-size: 30px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.33;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
