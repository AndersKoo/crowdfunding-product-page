import React from 'react';
import styled from 'styled-components';
import ToggleSwitch from './ToggleSwitch';

const BookmarkedButtonsStyle = styled.div`
  position: relative;
  display: flex;
  background-color: rgba(245, 245, 245, 0.8);
`;
function BookmarkedButtons() {
  return (
    <BookmarkedButtonsStyle>
      <ToggleSwitch />
    </BookmarkedButtonsStyle>
  );
}

export default BookmarkedButtons;
