//Questão 5

const inverteString = (string) => {

    const stringDivida = string.split("");
    const transfereValor = [];
    let stringInvertida;

    for (let i = 0; i < stringDivida.length; i++) {
        transfereValor.unshift(stringDivida[i])
    }

    return stringInvertida = transfereValor.join('');
};