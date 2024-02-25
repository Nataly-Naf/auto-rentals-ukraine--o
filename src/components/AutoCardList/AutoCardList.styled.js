import styled from 'styled-components';

export const AutoList = styled.ul`
  width: 1184px;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
  padding: 0px;
  row-gap: 50px;
  column-gap: 29px;
`;

export const LoadButton = styled.button`
  max-width: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;

  background-color: transparent;
  color: var(--accent-color);
  font-size: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  &:hover {
    color: var(--hover-color);
  }
`;
