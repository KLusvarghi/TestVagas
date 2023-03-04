import { useState } from "react"
import {Container, ContainerFlex, Text, Title, Label, Input} from './styles'

export default function Question05(){
  const [palavra, setPalavra] = useState('')
  let revert = []

  function reverteString() {
    for(let i = palavra.length; i >= 0; i--){
      revert.push(palavra[i])
    }
  }

  reverteString()

  return (
    <Container>
      <Title>Questão 5</Title>
      <ContainerFlex>
      <Label>Escreva algo: </Label>
      <Input type="text" onChange={(e) => setPalavra(e.target.value)}/>
      </ContainerFlex>
      <Text>{revert.join('')}</Text>
    </Container>
  )
}