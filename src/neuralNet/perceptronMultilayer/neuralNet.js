import Node from "./node.js";


const activationFunction = (x) => {

    // 1 / 1 + e^ -x

    return 1 / (1 + Math.exp(-x));
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


    training(){

        for(let data of dataTraining){

            let node1 = this.inputLayer[0];
            let node2 = this.inputLayer[1];

            node1.input = data.input;
            node2.input = data.input;

            this.calcNet();
        }

        // todo calcula o erro, se o erro é aceitável
        // todo para - return

        this.training();
    }


    run(data){

    }


    calcNet(){

        for(let layer of this.layerList){

            for(let node of layer){

                if(node.layer === 'hidden' ){

                    node.activationFuncation = 'sigmoid';
                    node.calcActivationFunction = activationFunction(node.input);
                }

                if(node.layer === 'finalLayer'){

                    node.activationFuncation = 'sigmoid';
                    node.calcActivationFunction = activationFunction(node.input);

                    node.output = node.calcActivationFunction;

                    let error = this.calcError(this.correctResponse, node.output);

                    let response = { 'error' : error, 'output': node.output };

                    return response;
                }

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


export default NeuralNet;