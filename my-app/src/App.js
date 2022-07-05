import HeroImage from './components/HeroImage';
import styled from 'styled-components';
import '../src/App.css';
import Logo from './components/Logo';
import InfoBox from './components/InfoBox';
import StatusBox from './components/StatusBox';

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  background-color: white;
  border-radius: 10px;
  z-index: 50;
  padding-bottom: 2em;
  margin: 2em auto;
`;

const Background = styled.div`
  background-color: antiquewhite;
`;

const Overlap = styled.div`
  margin-top: -5em;
`;

function App() {
  return (
    <>
      <Background>
        <HeroImage />
        <Overlap>
          <Container>
            <Logo />
            <InfoBox showInfo showButtons />
          </Container>
          <Container>
            <StatusBox />
          </Container>
          <Container>
            <InfoBox about />
          </Container>
          <Container>
            <InfoBox product />
          </Container>
        </Overlap>
      </Background>
    </>
  );
}

export default App;
