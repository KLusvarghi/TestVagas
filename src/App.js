import styled from 'styled-components';
import Question02 from './Questions/Question02';
import Question03 from './Questions/Question03'
import Question04 from './Questions/Question04'
import Question05 from './Questions/Question05'

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0 60px 0px;
  background: #0F131A;
`;

const Section = styled.section`
  display: block;
  width: 800px;
  box-shadow: -4px 1px 12px -7px rgba(0, 0, 0, 0.25);
`;

function App() {
  return (
    <Container>
      <Section>
        <Question02/>
        <Question03/>
        <Question04/>
        <Question05/>
      </Section>
    </Container>  
  );
}

export default App;
