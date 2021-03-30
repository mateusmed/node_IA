
/*

    Algoritmo mais simples:

    erro = respostaCorreta - respostaCalculada

    -------------------------------------------------------
    Os pesos são atualizados até os erros serem pequenos

    pesoNovo = pesoAtual + (taxaAprendizagem * entrada * erro)

*/

function neuronio(estimulo1, estimulo2, peso){
    let value = calculo(estimulo1, estimulo2, peso);
    return ativacao(value);
}

function calculo(estimulo1, estimulo2, peso){

    let calc1 = estimulo1 * peso;
    let calc2 = estimulo2 * peso;

    return calc1 + calc2;
}


function ativacao(value){

    if(value >= 1){
        return 1;
    }

    return 0;
}

function novoPeso(pesoAtual, taxaAprendizagem, entrada, erro){
    return pesoAtual + (taxaAprendizagem * entrada * erro);
}

function erro(respostaCorreta, respostaCalculada){
    return respostaCorreta - respostaCalculada;
}

function redeNeural(estimuloList){

    let respostaCorreta = [0, 0, 0, 1]
    let taxaAprendizagem = 0.1;
    let peso = 0;

    let respostaList = [];

    for(let estimulo of estimuloList){

        let resposta = neuronio(estimulo[0], estimulo[1], peso);
        respostaList.push(resposta);
    }


    let erroResp = erro(respostaCorreta[0], respostaList[0]);
    let novoPesoResp = novoPeso(peso, taxaAprendizagem, estimuloList[0][0], erroResp   )

    console.log("--> " , erroResp);
    console.log("--> " , novoPesoResp);

    // for(const [index, value] of respostaList.entries()){
    // }

}


function main(){

    let porcentagem = 100;

    let estimulos = [ [0, 0],
                      [0, 1],
                      [1, 0],
                      [1, 1] ];

    redeNeural(estimulos);

}

main();