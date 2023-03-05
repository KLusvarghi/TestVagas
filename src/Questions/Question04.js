import {Container, Title,Table, SubTitle, ContainerTable} from './styles'

export default function Question04() {
  const mediaporDistribuidora = []
  const faturaDistribuidora = [
    {
      estado: 'SP',
      valor: '67.836,43',
    },
    {
      estado: 'RJ',
      valor: '36.678,66',
    },
    {
      estado: 'MG',
      valor: '29.229,88',
    },
    {
      estado: 'ES',
      valor: '27.165,48',
    },
    {
      estado: 'Outros',
      valor: '19.849,53',
    },
  ];

  function percentual(total){
    faturaDistribuidora.forEach((distri) => {
      const percentual = +(((distri.valor / total) * 100).toFixed(2));
      return mediaporDistribuidora.push({estado: distri.estado, porcentagem: percentual})
    })
  }

  function valorTotal(){
    const novaFatura = faturaDistribuidora.map((distribu) => (
      distribu.valor =  parseFloat(distribu.valor.replace('.', '').replace(',', '.'))
    ))
    let total = 0
    novaFatura.forEach((valor) => {
      total += valor
    })
    percentual(+(total.toFixed(2))) 
  }

  valorTotal()

  return (
    <Container>
      <Title>Questão 4</Title>
      <SubTitle>Percentual de representação que cada estado</SubTitle>
      <ContainerTable>
        <Table>
          <tr>
            <td>Distribuidora</td>
            <td>Porcentagem</td>
          </tr>
          {mediaporDistribuidora.map((item, index) => (
            <tr key={index}>
              <td>{item.estado}</td>
              <td>{item.porcentagem}%</td>
            </tr>  
          ))}
        </Table>
      </ContainerTable>
    </Container>
  )
}