
/*
    APRENDIZAGEM SUPERVISIONADA - perceptron 1 camada

    rede neural para classificação da porta AND, logica digital

    rede neural simples de apenas um neurônio,
    só funciona para problemas linearmente separáveis
    -------------------------------------------------------


    -------------------------------------------------------

    Algoritmo mais simples:

    erro = respostaCorreta - respostaCalculada

    -------------------------------------------------------
    Os pesos são atualizados até os erros serem pequenos

    pesoNovo = pesoAtual + (taxaAprendizagem * entrada * erro)
*/

function neuronio(estimulo1, peso1, estimulo2, peso2){
    let value = calculo(estimulo1, peso1, estimulo2, peso2);
    return ativacao(value);
}



function calculo(estimulo1, peso1, estimulo2, peso2){

    let calc1 = estimulo1 * peso1;
    let calc2 = estimulo2 * peso2;

    return calc1 + calc2;
}


//função de ativação STEP
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


function calculoAcertoPorcentagem(estimuloList) {

    let sizeEstimulos = estimuloList.length - 1;

    let numErros = estimuloList.filter((item) => {
        return item.erro >= 1 || item.erro === null;
    })

    let sizeErrors = numErros.length;

    let porcentagemErros = sizeErrors / sizeEstimulos;
    let porcentagemAcertos = 1 - porcentagemErros;

    console.log(`porcentagemAcertos -> ${porcentagemAcertos}`);

    return porcentagemAcertos;
}


function redeNeuralExe(estimulo, peso1, peso2){

    let resposta = neuronio(estimulo.input1, peso1, estimulo.input2, peso2);
    estimulo.resposta = resposta;
}


function redeNeuralTreino(estimuloList, taxaDeAcerto){

    // taxa de aprendizagem constante, valor de caligração
    let taxaAprendizagem = 0.1;

    // peso valor a ser alterado relativo ao calculo da taxa de aprendizagem
    let peso1 = 0;
    let peso2 = 0;

    while(calculoAcertoPorcentagem(estimuloList) < taxaDeAcerto ){

        for(let estimulo of estimuloList){

            let resposta = neuronio(estimulo.input1, peso1, estimulo.input2, peso2);
            estimulo.resposta = resposta;

            let erroResp = erro(estimulo.respostaEsperada, estimulo.resposta);
            estimulo.erro = erroResp;

            let novoPeso1 = novoPeso(peso1, taxaAprendizagem, estimulo.input1, erroResp);
            let novoPeso2 = novoPeso(peso2, taxaAprendizagem, estimulo.input2, erroResp);

            peso1 = novoPeso1;
            peso2 = novoPeso2;
        }
    }

    return [peso1, peso2];
}


function main(){

    let taxaDeAcerto = 0.9;

    let estimulosTeste = [
                      {'input1': 0,'input2': 0, 'respostaEsperada': 0, 'resposta': null, 'erro': null},
                      {'input1': 0,'input2': 1, 'respostaEsperada': 0, 'resposta': null, 'erro': null},
                      {'input1': 1,'input2': 0, 'respostaEsperada': 0, 'resposta': null, 'erro': null},
                      {'input1': 1,'input2': 1, 'respostaEsperada': 1, 'resposta': null, 'erro': null}
                      ];

    let pesosAchados = redeNeuralTreino(estimulosTeste, taxaDeAcerto);


    console.log('------------');
    console.log(`estimulosTeste ->`, estimulosTeste);
    console.log('------------');
    console.log(`pesos achados ->`, pesosAchados);
    console.log('------------');

    let estimulo = {'input1': 0,'input2': 1, 'resposta': null};

    redeNeuralExe(estimulo, pesosAchados[0], pesosAchados[1]);

    console.log('------------');
    console.log(estimulo.resposta);
    console.log('------------');
}

main();