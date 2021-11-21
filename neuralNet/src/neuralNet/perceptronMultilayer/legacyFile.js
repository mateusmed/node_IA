
class Legacy{


    calcHiddenLayer(layer){

        for(let node of layer){

            node.activationFuncation = 'sigmoid';
            node.input = activationFunction(node.input);

            for(const [index, nodeSon] of node.nodeSonList.entries()){

                let w = node.w_list[index];
                let calcVertice = node.input * w;

                nodeSon.partialInput.push(calcVertice);
                nodeSon.input = nodeSon.input + calcVertice;
            }
        }

    }

    calcInputLayer(layer){

        for(let node of layer){

            for(const [index, nodeSon] of node.nodeSonList.entries()){

                let w = node.w_list[index];
                let calcVertice = node.input * w;

                nodeSon.partialInput.push(calcVertice);
                nodeSon.input = nodeSon.input + calcVertice;
            }
        }
    }


    calcLayers_old(layerList){

        for(let layer of layerList){

            for(let node of layer){

                if(node.layer === 'hidden' || node.layer === 'finalLayer'){

                    node.activationFuncation = 'sigmoid';
                    node.input = activationFunction(node.input);
                }

                if(node.nodeSonList === null){
                    console.log(``);
                    return;
                }

                for(const [index, nodeSon] of node.nodeSonList.entries()){

                    let w = node.w_list[index];
                    let calcVertice = node.input * w;

                    nodeSon.partialInput.push(calcVertice);
                    nodeSon.input = nodeSon.input + calcVertice;
                }
            }

        }
    }
}

