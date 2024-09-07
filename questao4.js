//Questão 4

const faturamentoMensal = [
    {estado: "SP", faturamento: 67836.43},
    {estado: "RJ", faturamento: 36678.66},
    {estado: "MG", faturamento: 29229.88},
    {estado: "ES", faturamento: 27165.48},
    {estado: "Outros", faturamento: 19849.53}
]

const faturamentoTotal = faturamentoMensal.reduce(function(ac, valor) {return ac += valor.faturamento},0);

const transformaEmPercentual = (faturamento) => (faturamento*100)/faturamentoTotal;

for (const elements of faturamentoMensal) {
    console.log(elements.estado, " - ", + Math.floor(transformaEmPercentual(elements.faturamento)) + " %");
}
