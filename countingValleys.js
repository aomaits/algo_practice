/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

const sampleSteps1 = 8;
const samplePath1 = ['U', 'D', 'D','D','U','D','U','U'];

function countingValleys(steps, path) {
    // Write your code here
    // possible solutions- count from the beginning, if U add 1, if D subtract 1
    // if value is negative (traversing valley) add 1 tally to valleys traversed 
    // but don't count going further down in the same valley! 
    // maybe create an array with the values, and if the previous array value is 0 and this one is -1 then we can add to our valley total

    
}

countingValleys(sampleSteps1, samplePath1);