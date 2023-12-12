/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

const sampleArray = [63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67, 99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44, 3, 89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24, 87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95, 33, 46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 32, 21, 79, 75, 75, 13, 87, 70, 33  ];

const sampleArray2 = [2, 4, 2, 4, 3, 3, 3, 4, 99, 99, 99, 99, 99, 99];


function countingSort(arr) {
    // Create empty array for resulting count
    const resultArray = [];

    // create an array of one-hundreds zeros to count between index positions 0 and 99
    let createResultArray = () => {
        for (let i = 0; i < 100; i++) {
            resultArray.push(0)
        }
    }
    
    createResultArray();

    // loop through the input array and tally the instances of each value
    for (let i = 0; i < arr.length; i++) {
        const individualValue = arr[i];
        
        // 
        let startingTally = resultArray.at(individualValue)
        resultArray.splice(individualValue, 1, (startingTally + 1))
    }

    return resultArray
}

countingSort(sampleArray2);