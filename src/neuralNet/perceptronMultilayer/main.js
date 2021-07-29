import Node from './node.js';


function main(){



    let node6 = new Node(6, 0, null);

    let finalLayer = [node6];

    let node3 = new Node(3, 0, finalLayer);
    let node4 = new Node(4, 0, finalLayer);
    let node5 = new Node(5, 0, finalLayer);


    let hiddenLayer = [node3, node4, node5];

    let node1 = new Node(1, 0, hiddenLayer);
    let node2 = new Node(2, 0, hiddenLayer);

    console.log(`node1 `, node1.toString());

}


main();