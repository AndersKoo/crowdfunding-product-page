import React from 'react';
import image from '../images/logo-mastercraft.svg';
import styled from 'styled-components';

const LogoStyle = styled.div`
  .logo {
    z-index: 100;
    position: absolute;
    margin-top: -36px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;
function Logo() {
  return (
    <LogoStyle>
      <img src={image} alt="" className="logo" />
    </LogoStyle>
  );
}

export default Logo;
