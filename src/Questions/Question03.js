import json from '../api/dados.json';
import {Container, Title, SubTitle, Text} from './styles'

export default function Question03() {
  const faturamentoDiario = [];
  const informacoes = [
    {
      maiorVlFaturamento: null,
      menorVlFaturamento: null,
      diasVlFaturamentoZero: null,
      diasMaiorFaturamentoMensal: null,
    },
  ];

  function faturaNoZero(faturamento) {
    const valorFiltrado = faturamento.filter((fatura) => {
      fatura.valor.toFixed(2);
      return fatura.valor > 0;
    });
    const novaFatura = valorFiltrado.map(
      (fatura) => (fatura.valor = +fatura.valor.toFixed(2)),
    );
    return novaFatura;
  }

  function preencheArray() {
    json.map(({ dia, valor }) =>
      faturamentoDiario.push({ dia: dia, valor: valor }),
    );
    calculaMenorValorMes(faturamentoDiario);
    calculaMaiorValorMes(faturamentoDiario);
    diasMaiorMedia(faturamentoDiario);
  }

  function diasMaiorMedia(faturamento) {
    const faturaDoMes = faturaNoZero(faturamento);
    const media = () => {
      let soma = 0;
      for (let i = 0; i < faturaDoMes.length; i++) {
        soma += faturaDoMes[i];
      }
      return soma / faturaDoMes.length;
    };

    const diasMaior = faturaDoMes.filter((fatura) => {
      return fatura > media();
    });

    informacoes[0].diasMaiorFaturamentoMensal = diasMaior.length;
  }

  function calculaMaiorValorMes(faturamento) {
    const maiorValor = faturamento.reduce((maior, obj) => {
      return obj.valor > maior ? [obj.valor] : maior;
    }, faturamento[0].valor);

    informacoes[0].maiorVlFaturamento = currencyBRL(maiorValor);
  }

  function currencyBRL(value) {
    const valorFormatado = value.toLocaleString(
      'pt-BR', 
      { style: 'currency', currency: 'BRL' }
    );
    return valorFormatado;
  };

  function calculaMenorValorMes(faturamento) {
    const faturaDoMes = faturaNoZero(faturamento);
    const menorValor = faturaDoMes.reduce((menor, obj) => {
      return obj.valor < menor ? [obj.valor] : menor;
    }, faturamento[0].valor);

    let soma = 0
    faturamento.forEach((value) => {
      if(value.valor === 0) soma ++
    });

    informacoes[0].diasVlFaturamentoZero = soma;
    informacoes[0].menorVlFaturamento = currencyBRL(menorValor);
  }

  preencheArray()

  return (
    <Container>
      <Title>Questão 3</Title>
      <SubTitle>Conforme os valores do faturamento mensal</SubTitle>
      <Text>{`O menor valor do faturamento ocorrido em um dia do mês é de ${informacoes[0].menorVlFaturamento}.`}</Text>
      <Text>{`Houve ${informacoes[0].diasVlFaturamentoZero} dias em que o valor do faturamento foi igual a 0.`}</Text>
      <Text>{`O maior valor de faturamento ocorrido em um dia do mês é de ${informacoes[0].maiorVlFaturamento}.`}</Text>
      <Text>{`Houve ${informacoes[0].diasMaiorFaturamentoMensal} dias em que o valor de faturamento diário foi superior à média mensal.`}</Text>
    </Container>
  )
}