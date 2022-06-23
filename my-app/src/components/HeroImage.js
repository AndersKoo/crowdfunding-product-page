import React from 'react';
import styled from 'styled-components';
import BackgroundImage from './BackgroundImage';

const HeroImageStyle = styled.div``;

function HeroImage() {
  return (
    <HeroImageStyle>
      <BackgroundImage />
    </HeroImageStyle>
  );
}

export default HeroImage;
