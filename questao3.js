//Questão 3

const fs = require('fs');

fs.readFile('dados.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }

  const jsonData = JSON.parse(data);
  
    let menorValor = jsonData.reduce(function(acumulador, valor) {
        if(acumulador.valor > valor.valor && valor.valor !== 0) return valor;
        return acumulador;
    }).valor;

    let maiorValor = jsonData.reduce(function(acumulador, valor) {
        if(acumulador.valor > valor.valor) return acumulador;
        return valor;
    }).valor;

    let mediaMensal = jsonData.reduce(function(ac, valor) { return ac += valor.valor}, 0);
    mediaMensal = mediaMensal/21;
    
    let diasMaiorQueMedia = jsonData.filter(obj => obj.valor > mediaMensal).length;
    
    console.log("O maior valor ocorrido em um dia do mês foi R$", maiorValor);
    console.log("O menor valor ocorrido em um dia do mês foi R$", menorValor);
    console.log("A quantidade de dias no mês que o faturamento diário foi maior que a média foram:", diasMaiorQueMedia);
});