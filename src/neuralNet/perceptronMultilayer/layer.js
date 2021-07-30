



class Layer{

    constructor(id, layer, input, nodeSonList) {

        this.id = id;
        this.layer = undefined;
        this.activationFuncation = undefined;
        this.input = input;
        this.partialInput = [];
        this.nodeSonList = nodeSonList;

        if(nodeSonList){
            this.w_list = generateWList(nodeSonList.length);
        }

    }


}