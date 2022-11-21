import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg)
  }
  `;

const StyledButton = styled.button.attrs((props) => ({
  // component default props
  outlined: true,
}))`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    animation: ${rotateAnimation} 1s infinite linear;
  }
  align-self: ${(props) => props.align || 'stretch'};

  ${(props) =>
    // props group styles
    props.primary &&
    css`
      color: ${(props) => props.color || props.theme.colors.primary};
      background: ${(props) => props.background || props.theme.colors.primary};
    `}

  ${(props) =>
    props.outlined &&
    css`
      color: ${(props) => props.color || props.theme.colors.primary};
      border: 1px solid ${(props) => props.color || props.theme.colors.primary};
      background: transparent;
    `}
`;

// inheritance from other styled component
const LargeButton = styled(StyledButton)`
  font-size: 26px;
`;

const Button = (props) => {
  return <LargeButton {...props} />;
};

export default Button;
