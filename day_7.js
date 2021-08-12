'use strict';

// let givenArray = [
//   [1, 1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0],
//   [0, 0, 2, 4, 4, 0],
//   [0, 0, 0, 2, 0, 0],
//   [0, 0, 1, 2, 4, 0]
// ]
// An hour glass shape is define with this shape:
//  445
//   3
//  555
// In each given array there are 16 hour glass shapes.
// Calculate the hourglass sum for every hourglass in the given array, then print the maximum hourglass sum.

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {

    let arr = Array(6);

    console.log(arr);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let largest;

    let count = 0;
    let i = 0;
    while (i < arr.length) {
        let topArray = arr[i];
        let midArray = arr[i + 1];
        let botArray = arr[i + 2];


        if (topArray === undefined || midArray === undefined || botArray === undefined) {
            i++;
            continue;
        }
        let j = 0;
        while (j < topArray.length) {
            let topValueOne = topArray[j];
            let topValueTwo = topArray[j + 1];
            let topValueThree = topArray[j + 2];

            let midValueTwo = midArray[j + 1];

            let botValueOne = botArray[j];
            let botValueTwo = botArray[j + 1];
            let botValueThree = botArray[j + 2];

            if ( topValueOne === undefined || topValueTwo === undefined || topValueThree === undefined ) {
                j++;
                continue;
            }
            if ( midValueTwo === undefined ) {
                j++;
                continue;
            }
            if ( botValueOne === undefined || botValueTwo === undefined || botValueThree === undefined ) {
                j++;
                continue;
            }

            let total = topValueOne + topValueTwo + topValueThree + midValueTwo + botValueOne + botValueTwo + botValueThree;

            if (largest === undefined) {
                largest = total;
            }

            if (total > largest) {
                largest = total;
            }

            j++;
        }


        count++;
        i++;
    }

    console.log(largest);

}
