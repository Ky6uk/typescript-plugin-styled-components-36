import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';

const rootElement = document.getElementById('react-root');

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: greenyellow;
  animation: ${rotate360} 2s linear infinite;
`;

class Index extends Component {
  render() {
    return <StyledDiv />;
  }
}

ReactDOM.render(<Index />, rootElement);
