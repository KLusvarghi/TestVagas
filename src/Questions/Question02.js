import { useState, useRef } from 'react';
import {ContainerFlex, Container, Title, Label, Input, Exiber, Button} from './styles'

export default function Question02() {
  const [sequencia, setSequencia] = useState([]);
  const [value, setValue] = useState(0);
  const buttonRef = useRef(null);

  function fibonacci() {
    const fibSequence = [0, 1];
    for (let i = 2; i < value; i++) {
      fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }
    setSequencia(fibSequence);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' && buttonRef.current) {
      buttonRef.current.click();
    }
  }

  return (
    <ContainerFlex>
      <Container>
        <Title>Questão 2</Title>
        <Label>Insira um número: </Label>
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(+e.target.value)}
          onKeyDown={handleKeyDown}
        ></Input>
        <Button ref={buttonRef} onClick={() => fibonacci()}>
          Calcular
        </Button>
      </Container>
        <Exiber>
          {sequencia.map((item, index) => (
            // if(index == (value - 1))
            <span key={index}>
              {' '}
              {item} {index === value - 1 ? '.' : ','}{' '}
            </span>
          ))}
        </Exiber>
    </ContainerFlex>
  );
}