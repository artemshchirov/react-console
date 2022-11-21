import React from 'react';
import styled from 'styled-components';

const StyledLine = styled.div`
  font-size: 26px;
  color: ${(props) => props.color || props.theme.colors.primary};
`;

const Line = (props) => {
  return <StyledLine {...props} />;
};

export default Line;
