import styled from 'styled-components';

export const AutoList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
  padding: 0px;
`;

export const LoadButton = styled.button`
  margin-left: auto;
  margin-right: auto;
  background-color: #3470ff;
  color: #ffffff;
  width: 274px;
  height: 44px;

  padding: 12px, 99px, 12px, 99px;
  border-radius: 12px;
  border: none;

  &:hover {
    background-color: #0b44cd;
  }
`;
