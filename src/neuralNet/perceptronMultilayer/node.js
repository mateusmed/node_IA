


const generateWList = (sizeNodeSonList) => {

    const max = 1000;
    const min = -1000;

    let listRandonNumber = [];

    for(let times = 1; times <=sizeNodeSonList; times++){
        listRandonNumber.push(Math.random() * (max - min) + min);
    }

    return listRandonNumber;
}


class Node{

    constructor(id, layer, input, nodeSonList) {

        this.id = id;
        this.layer = layer;
        this.activationFuncation = undefined;
        this.calcActivationFunction = 0;
        this.input = input;
        this.output = 0;
        this.partialInput = [];

        if(nodeSonList){
            this.w_list = generateWList(nodeSonList.length);
        }

        this.nodeSonList = nodeSonList;
    }


    toString(){
        return JSON.stringify(this, undefined, 2);
    }

}


export default Node;