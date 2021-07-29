


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

    constructor(id, input, nodeSonList) {

        this.id = id;
        this.input = input;
        this.nodeSonList = nodeSonList;

        if(nodeSonList){
            this.w_list = generateWList(nodeSonList.length);
        }

    }

    toString(){
        return JSON.stringify(this,
                              undefined,
                              2);
    }

}


export default Node;