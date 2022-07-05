import React from 'react';
import styled from 'styled-components';

const ToggleSwitchStyle = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 130px;
    height: 50px;
    background-color: #ddd;
    border-radius: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider:before {
    position: absolute;
    padding: 7px;
    content: '';
    height: 26px;
    width: 26px;
    top: 5px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translatex(83px);
    -ms-transform: translate(83px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    background-color: hsl(176, 72%, 28%);
    border-radius: 50%;
  }

  p {
    margin: 5px;
    text-align: center;
    font-size: 12px;
  }
`;

function ToggleSwitch() {
  return (
    <ToggleSwitchStyle>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </ToggleSwitchStyle>
  );
}

export default ToggleSwitch;
