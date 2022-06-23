import HeroImage from './components/HeroImage';
import TopInfoBox from './components/TopInfoBox';
import styled from 'styled-components';
import '../src/App.css';
import Logo from './components/Logo';

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  background-color: grey;
  border-radius: 10px;
  z-index: 50;
  margin: 0 auto;
`;

const TopContainer = styled.div``;

function App() {
  return (
    <>
      <TopContainer>
        <HeroImage />
      </TopContainer>

      <MainContainer>
        <Logo />
        <TopInfoBox />
      </MainContainer>
    </>
  );
}

export default App;
