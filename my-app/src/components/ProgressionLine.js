import React from 'react';
import styled from 'styled-components';

const ProgressionLineStyle = styled.div`
  #myProgress {
    position: absolute;
    width: 100%;
    max-width: 620px;
    margin: 1em;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    background-color: #ddd;
    border-radius: 10px;
  }

  #myBar {
    right: 40px;
    width: 1%;
    height: 20px;
    color: green;
  }
`;

function ProgressionLine() {
  return (
    <ProgressionLineStyle>
      <div id="myProgress">
        <div id="myBar"></div>
      </div>
    </ProgressionLineStyle>
  );
}

export default ProgressionLine;
