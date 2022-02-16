import styled from 'styled-components';

export const Input = styled.input`
  margin: 4px 0;
  border-radius: 4px;
  padding: 4px;
  border: 2px solid white;
  &[type='text'] {
    padding: 6px;
  }
  transition: 0.3s;
  &:focus-visible {
    border: 2px solid black;
    outline: 0px;
  }
`;
