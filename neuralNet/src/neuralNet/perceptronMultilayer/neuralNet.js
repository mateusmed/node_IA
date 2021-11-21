import Node from "./node.js";


const sigmoid = (x) => {

    // 1 / 1 + e^ -x

    return 1 / (1 + Math.exp(-x));
}


//derivada parcial
const partialDerivative = (y) => {

    return y * (1 - y);
}


const deltaFinalLayer = (node) => {

    let value = partialDerivative(node.calcActivationFunction);

    return node.error * value;

}

const deltaHiddenLayer = () => {

    //todo
    // derivadaSigmoide === derivada do input

    //todo
    // derivadaSigmoide * peso * deltaSaída


}



class NeuralNet{

    constructor(dataTrainingList) {

        this.dataTrainingList = dataTrainingList;

        //gerando rede com numero de nós definidos
        //gerando peso aleatoriamente
        this.buildNodes();
    }


    buildNodes(){

        let node6 = new Node(6,'finalLayer',0, null);

        this.finalLayer = [node6];

        let node3 = new Node(3, 'hidden', 0, this.finalLayer);
        let node4 = new Node(4, 'hidden', 0, this.finalLayer);
        let node5 = new Node(5, 'hidden', 0, this.finalLayer);

        this.hiddenLayer = [node3, node4, node5];

        let node1 = new Node(1, 'inputLayer', null, this.hiddenLayer);
        let node2 = new Node(2, 'inputLayer', null, this.hiddenLayer);

        this.inputLayer = [node1, node2];

        this.layerList = [this.inputLayer, this.hiddenLayer, this.finalLayer];
    }

    getLog(){

        for(let node of this.inputLayer){
            console.log(node.toString());
        }
    }

    calcError(correctResponse, answerGiven){

        console.log("correctResponse -> ", correctResponse);
        console.log("answerGiven -> ", answerGiven);

        return correctResponse - answerGiven;
    }


    calcAbsErros(responseList){

        let sumError = 0;

        for(let response of responseList){

            let abs = Math.abs(response.error);
            sumError = sumError + abs;
        }

        return sumError;
    }


    training(){

        let responseList = [];

        for(let data of this.dataTrainingList){

            let node1 = this.inputLayer[0];
            let node2 = this.inputLayer[1];

            node1.input = data.input;
            node2.input = data.input;

            let response = this.calcNet();

            responseList.push(response);
        }

        console.log(responseList);


        let absResponseError = this.calcAbsErros(responseList);

        // if(absResponseError >= 0.6){
        //
        //     console.log('treinamento efetuado com sucesso');
        //     return;
        // }

        // todo ajuste de pesos backpropagation


        // this.training();
    }


    run(data){

    }


    backPropagation(){

    }



    calcNet(){

        for(let layer of this.layerList){

            for(let node of layer){

                if(node.layer === 'hidden' ){

                    //todo fazer os calculos dos deltas já direto aqui

                    node.activationFuncation = 'sigmoid';
                    node.calcActivationFunction = sigmoid(node.input);
                }

                if(node.layer === 'finalLayer'){

                    node.activationFuncation = 'sigmoid';
                    node.calcActivationFunction = sigmoid(node.input);

                    node.output = node.calcActivationFunction;

                    let error = this.calcError(node.correctResponse, node.output);

                    // deltaFinalLayer(node);

                    let response = { 'error' : error,
                                     'output': node.output,
                                     'input': node.input,
                                     'node.calcActivationFunction': node.calcActivationFunction };

                    return response;
                }

                if(node.layer === 'inputLayer'){

                    for(const [index, nodeSon] of node.nodeSonList.entries()){

                        let w = node.w_list[index];
                        let calcVertice = node.calcActivationFunction * w;

                        node.output = node.output + calcVertice;

                        let parcialInput = {'origin_id': node.id,
                            'value': calcVertice};

                        nodeSon.partialInput.push(parcialInput);


                        nodeSon.input = nodeSon.input + calcVertice;
                    }
                }
            }

        }
    }
}


export default NeuralNet;