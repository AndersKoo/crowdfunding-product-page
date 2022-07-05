import React from 'react';
import styled from 'styled-components';

const ProgressSectionStyle = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
`;

function ProgressSection({ children }) {
  return <ProgressSectionStyle>{children}</ProgressSectionStyle>;
}

export default ProgressSection;
