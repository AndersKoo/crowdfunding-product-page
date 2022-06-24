import React from 'react';
import styled from 'styled-components';
import StatusBar from './StatusBar';
import StatusBarDescription from './StatusBarDescription';

const StatusBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: 'Commissioner', sans-serif;
  font-weight: bold;

  @media all and (min-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

function StatusBox() {
  return (
    <StatusBoxStyle>
      <StatusBar title={'$89,910'} description="of $100,000 backed" />
      <StatusBar title={'5,007'} description="total backers" />
      <StatusBar title={'56'} description="days left" />
    </StatusBoxStyle>
  );
}

export default StatusBox;
