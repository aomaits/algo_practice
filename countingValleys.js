/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

const sampleSteps1 = 8;
const samplePath1 = 'UDDDUDUU';
const samplePath2 = 'DDUUDDUDUUUD'

function countingValleys(steps, path) {

    var valleysTraversed = 0;
    let fullHikeArray = [];
    let currentLocation = 0; 

    const splitPathArray = path.split("");
    // console.log(splitPathArray);


    splitPathArray.forEach(element => {
        let lastIndexPosition = fullHikeArray.length - 1;

        if (element === "U") {
            currentLocation = currentLocation + 1 //find out where we are in relation to sea level
            fullHikeArray.push(currentLocation);
            // console.log(fullHikeArray)
        }if (element === "D") {
            currentLocation = currentLocation - 1 //find out where we are in relation to sea level

            if ((fullHikeArray[lastIndexPosition]) === 0 || fullHikeArray.length < 1) {
                valleysTraversed = valleysTraversed + 1;
            }
            
            fullHikeArray.push(currentLocation);
        }
    });

    return valleysTraversed;
}

countingValleys(0, samplePath2);