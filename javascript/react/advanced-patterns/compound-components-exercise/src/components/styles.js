import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ disabled }) =>  disabled ? 'gray' : 'white'};
  border: none;
  font-size: 32px;
  &:hover {
    cursor: pointer;
  }
  &:active,
  &:focus {
    outline: none;
  }
`;

export { StyledButton };
