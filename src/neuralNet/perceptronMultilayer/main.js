import NeuralNet from "./neuralNet.js";


function main(){

    let dataTrainingList = [
        {'input1': 0, 'input2': 0, 'correctResponse': 0},
        {'input1': 0, 'input2': 1, 'correctResponse': 1},
        {'input1': 1, 'input2': 0, 'correctResponse': 1},
        {'input1': 1, 'input2': 1, 'correctResponse': 0},
    ]

    let neuralNet = new NeuralNet(dataTrainingList);
    neuralNet.training();

    let dataInput = {'input1': 0, 'input2': 0};

    let response = neuralNet.run(dataInput);

    console.log(response);
}


main();

