import React from 'react';
import styled from 'styled-components';
import BookmarkedButtons from './BookmarkedButtons';

const ButtonSectionStyle = styled.div`
  padding-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /*   justify-content: space-around; */

  .project {
    color: white;
    background-color: hsl(176, 72%, 28%);
    border-radius: 20px;
    border: none;
    padding: 1em;
    margin: 0 5em;
  }
  .bookmarked {
    color: white;
    background-color: hsl(176, 72%, 28%);
    border-radius: 20px;
    border: none;
    padding: 1em;
  }

  @media all and (min-width: 600px) {
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
