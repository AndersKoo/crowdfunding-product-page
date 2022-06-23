import React from 'react';
import styled from 'styled-components';
import image from '../images/image-hero-desktop.jpg';

const BackgroundImageStyle = styled.div`
  /*   background-image: url('../images/image-hero-desktop.jpg'); */
  .hero {
    /*     width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 25; */
    position: relative;
    width: 100%;
    height: 600px;
    max-height: 350px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    object-position: center center;
  }
`;

function BackgroundImage() {
  return (
    <>
      <BackgroundImageStyle>
        <img src={image} alt="" className="hero" />
      </BackgroundImageStyle>
      {/*       <BackgroundImageStyle /> */}
    </>
  );
}

export default BackgroundImage;
