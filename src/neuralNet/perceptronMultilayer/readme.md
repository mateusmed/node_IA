
exemplo de log: 
```
{
  "id": 1,
  "layer": "inputLayer",
  "calcActivationFunction": 0,
  "input": 0,
  "output": 0,
  "partialInput": [],
  "w_list": [
    -759.002332699763,
    -77.6240602436369,
    -808.6964034373772
  ],
  "nodeSonList": [
    {
      "id": 3,
      "layer": "hidden",
      "activationFuncation": "sigmoid",
      "calcActivationFunction": 0.5,
      "input": 0,
      "output": 35.01252125007693,
      "partialInput": [
        {
          "origin_id": 1,
          "value": 0
        },
        {
          "origin_id": 2,
          "value": 0
        }
      ],
      "w_list": [
        70.02504250015386
      ],
      "nodeSonList": [
        {
          "id": 6,
          "layer": "finalLayer",
          "activationFuncation": "sigmoid",
          "calcActivationFunction": 9.310553288948107e-158,
          "input": -361.57729617400355,
          "output": 0,
          "partialInput": [
            {
              "origin_id": 3,
              "value": 35.01252125007693
            },
            {
              "origin_id": 4,
              "value": -393.6431933320299
            },
            {
              "origin_id": 5,
              "value": -2.9466240920505697
            }
          ],
          "nodeSonList": null
        }
      ]
    },
    {
      "id": 4,
      "layer": "hidden",
      "activationFuncation": "sigmoid",
      "calcActivationFunction": 0.5,
      "input": 0,
      "output": -393.6431933320299,
      "partialInput": [
        {
          "origin_id": 1,
          "value": 0
        },
        {
          "origin_id": 2,
          "value": 0
        }
      ],
      "w_list": [
        -787.2863866640598
      ],
      "nodeSonList": [
        {
          "id": 6,
          "layer": "finalLayer",
          "activationFuncation": "sigmoid",
          "calcActivationFunction": 9.310553288948107e-158,
          "input": -361.57729617400355,
          "output": 0,
          "partialInput": [
            {
              "origin_id": 3,
              "value": 35.01252125007693
            },
            {
              "origin_id": 4,
              "value": -393.6431933320299
            },
            {
              "origin_id": 5,
              "value": -2.9466240920505697
            }
          ],
          "nodeSonList": null
        }
      ]
    },
    {
      "id": 5,
      "layer": "hidden",
      "activationFuncation": "sigmoid",
      "calcActivationFunction": 0.5,
      "input": 0,
      "output": -2.9466240920505697,
      "partialInput": [
        {
          "origin_id": 1,
          "value": 0
        },
        {
          "origin_id": 2,
          "value": 0
        }
      ],
      "w_list": [
        -5.8932481841011395
      ],
      "nodeSonList": [
        {
          "id": 6,
          "layer": "finalLayer",
          "activationFuncation": "sigmoid",
          "calcActivationFunction": 9.310553288948107e-158,
          "input": -361.57729617400355,
          "output": 0,
          "partialInput": [
            {
              "origin_id": 3,
              "value": 35.01252125007693
            },
            {
              "origin_id": 4,
              "value": -393.6431933320299
            },
            {
              "origin_id": 5,
              "value": -2.9466240920505697
            }
          ],
          "nodeSonList": null
        }
      ]
    }
  ]
}
{
  "id": 2,
  "layer": "inputLayer",
  "calcActivationFunction": 0,
  "input": 0,
  "output": 0,
  "partialInput": [],
  "w_list": [
    449.16745188922846,
    -416.4426515903559,
    283.18866337825625
  ],
  "nodeSonList": [
    {
      "id": 3,
      "layer": "hidden",
      "activationFuncation": "sigmoid",
      "calcActivationFunction": 0.5,
      "input": 0,
      "output": 35.01252125007693,
      "partialInput": [
        {
          "origin_id": 1,
          "value": 0
        },
        {
          "origin_id": 2,
          "value": 0
        }
      ],
      "w_list": [
        70.02504250015386
      ],
      "nodeSonList": [
        {
          "id": 6,
          "layer": "finalLayer",
          "activationFuncation": "sigmoid",
          "calcActivationFunction": 9.310553288948107e-158,
          "input": -361.57729617400355,
          "output": 0,
          "partialInput": [
            {
              "origin_id": 3,
              "value": 35.01252125007693
            },
            {
              "origin_id": 4,
              "value": -393.6431933320299
            },
            {
              "origin_id": 5,
              "value": -2.9466240920505697
            }
          ],
          "nodeSonList": null
        }
      ]
    },
    {
      "id": 4,
      "layer": "hidden",
      "activationFuncation": "sigmoid",
      "calcActivationFunction": 0.5,
      "input": 0,
      "output": -393.6431933320299,
      "partialInput": [
        {
          "origin_id": 1,
          "value": 0
        },
        {
          "origin_id": 2,
          "value": 0
        }
      ],
      "w_list": [
        -787.2863866640598
      ],
      "nodeSonList": [
        {
          "id": 6,
          "layer": "finalLayer",
          "activationFuncation": "sigmoid",
          "calcActivationFunction": 9.310553288948107e-158,
          "input": -361.57729617400355,
          "output": 0,
          "partialInput": [
            {
              "origin_id": 3,
              "value": 35.01252125007693
            },
            {
              "origin_id": 4,
              "value": -393.6431933320299
            },
            {
              "origin_id": 5,
              "value": -2.9466240920505697
            }
          ],
          "nodeSonList": null
        }
      ]
    },
    {
      "id": 5,
      "layer": "hidden",
      "activationFuncation": "sigmoid",
      "calcActivationFunction": 0.5,
      "input": 0,
      "output": -2.9466240920505697,
      "partialInput": [
        {
          "origin_id": 1,
          "value": 0
        },
        {
          "origin_id": 2,
          "value": 0
        }
      ],
      "w_list": [
        -5.8932481841011395
      ],
      "nodeSonList": [
        {
          "id": 6,
          "layer": "finalLayer",
          "activationFuncation": "sigmoid",
          "calcActivationFunction": 9.310553288948107e-158,
          "input": -361.57729617400355,
          "output": 0,
          "partialInput": [
            {
              "origin_id": 3,
              "value": 35.01252125007693
            },
            {
              "origin_id": 4,
              "value": -393.6431933320299
            },
            {
              "origin_id": 5,
              "value": -2.9466240920505697
            }
          ],
          "nodeSonList": null
        }
      ]
    }
  ]
}
```