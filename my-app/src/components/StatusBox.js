import React from 'react';
import styled from 'styled-components';
import { Container } from '../App';
import ProgressionLine from './ProgressionLine';
import StatusBar from './StatusBar';

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

const Divider = styled.div`
  position: relative;
  width: 3px;
  top: 3em;
  height: 60px;
  background-color: #ddd;
`;

function StatusBox() {
  return (
    <>
      <StatusBoxStyle>
        <StatusBar title={'$89,910'} description="of $100,000 backed" />
        <Divider />
        <StatusBar title={'5,007'} description="total backers" />
        <Divider />
        <StatusBar title={'56'} description="days left" />
      </StatusBoxStyle>
      <Container>
        <ProgressionLine />
      </Container>
    </>
  );
}

export default StatusBox;
