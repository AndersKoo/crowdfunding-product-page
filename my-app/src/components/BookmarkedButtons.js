import React from 'react';
import styled from 'styled-components';
import Circle from './Circle';

const BookmarkedButtonsStyle = styled.div`
  position: relative;
  display: flex;
  background-color: rgba(245, 245, 245, 0.8);
`;
function BookmarkedButtons() {
  return (
    <BookmarkedButtonsStyle>
      <Circle />
      Bookmarked
    </BookmarkedButtonsStyle>
  );
}

export default BookmarkedButtons;
