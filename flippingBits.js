// This algorithm challenged me to learn about 32-bit integers versus decimal numbers. 

function flippingBits(n) {
    let carryingNumber;
    
    const convertToBinary = (decimalNumber) => {
        let binaryArray = [];
        while (decimalNumber > 0) {
            
            let binaryRemainder = decimalNumber % 2;
            binaryArray.unshift(binaryRemainder);

            // if the number doesn't equally divide by 2, math floor the result
            decimalNumber = Math.trunc(decimalNumber / 2);
        }

        // while binaryArray.length < 32 bits, unshift 0 to the front of the array
        while (binaryArray.length < 32) {
            binaryArray.unshift(0);
        }

        flipTheBinary(binaryArray);
    }

    const flipTheBinary = (arr) => {
        let flippedArray = [];
        
        arr.forEach(binaryNumber => {
            if (binaryNumber === 0) {
                flippedArray.push(1)
            } else {
                flippedArray.push(0)
            }
        });

        binaryToDecimal(flippedArray);
    }

    const binaryToDecimal = (arr) => {

        arr.forEach(changeToDecimal)
        
        function changeToDecimal(binaryNumber, index, arr) {
            if (index === 0) {
                carryingNumber = binaryNumber;
            } if (index !== 0 && (index + 1) !== arr.length) {
                carryingNumber = (carryingNumber * 2) + binaryNumber; 
            } if (index !==0 && (index + 1) === arr.length) {
                carryingNumber = (carryingNumber * 2) + binaryNumber; 
                return carryingNumber
            }
        }
        
        return carryingNumber;
    }

    convertToBinary(n);
    return carryingNumber;
}

flippingBits(9);
