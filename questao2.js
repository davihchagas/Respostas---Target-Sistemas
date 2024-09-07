//Questão 2 

const pertenceASequencia = (numero) => {
    const sequencia = [0, 1];
    if (numero === 0) return console.log("O número pertence à sequência");

    for (let i = 1; i<=numero; i++) {
        let proximoNumero = sequencia[i-1] + sequencia [i];
        sequencia.push(proximoNumero);
        
        let valorNaSequencia = sequencia[i];
        
        if (valorNaSequencia === numero) return console.log("O número pertence à sequência");
        
    }

    return console.log("O número não pertence à sequência");
}

//Exemplos

pertenceASequencia(34); // Vai retonar "O número pertence à sequência"
pertenceASequencia(40); // Vai retonar "O número não pertence à sequência"