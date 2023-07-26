import React from "react";
import { styled } from "styled-components";

const Button = ({ children, bgColor, padding, ...rest }) => {
  return (
    <StyledButton bgColor={bgColor} padding={padding} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  border: none;
  color: #fff;
  padding: ${(p) => p.padding};
  background-color: ${(p) => p.bgColor};
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #4290aa;
  }

  &:active {
    background-color: #7bc803;
  }

  &:disabled {
    background-color: grey;
  }
`;
