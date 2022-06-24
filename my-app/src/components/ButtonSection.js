import React from 'react';
import styled from 'styled-components';
import BookmarkedButtons from './BookmarkedButtons';

const ButtonSectionStyle = styled.div`
  padding-top: 2em;
  display: flex;
  justify-content: space-between;

  .project {
    color: white;
    background-color: hsl(176, 72%, 28%);
    border-radius: 20px;
    border: none;
    padding: 1em;
  }
  .bookmarked {
    color: white;
    background-color: hsl(176, 72%, 28%);
    border-radius: 20px;
    border: none;
    padding: 1em;
  }
`;

function ButtonSection() {
  return (
    <ButtonSectionStyle>
      <button className="project">Back this project</button>
      <BookmarkedButtons />
    </ButtonSectionStyle>
  );
}

export default ButtonSection;
