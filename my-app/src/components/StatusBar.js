import React from 'react';
import styled from 'styled-components';

const StatusBarStyle = styled.div`
  /*   display: flex;
  flex-direction: column;
  justify-content: space-evenly; */
  padding-top: 3em;
`;

function StatusBar({
  title,
  description,
  totalBackers,
  daysLeft,
  backedDescription,
  totalBackersDescription,
  daysLeftDescription,
}) {
  return (
    <StatusBarStyle>
      <h2>{title}</h2>
      <p>{description}</p>
    </StatusBarStyle>
  );
}

export default StatusBar;
