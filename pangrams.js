const example1 = "We promptly judged antique ivory buckles for the next prize"
const example2 = "We promptly judged antique ivory buckles for the prize"

function pangrams(s) {
    var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"]  //|ABCDEFGHIJKLMNOPQRSTUVWXYZ
    const lowercaseVersion = s.toLowerCase();

    for (let i = 0; i < lowercaseVersion.length; i++) {
        const stringElement = lowercaseVersion[i];
        for (let index = 0; index < alphabetArray.length; index++) {
            const alphabetArrayElement = alphabetArray[index];
            if (stringElement === alphabetArrayElement) {
                alphabetArray.splice(index, 1);
                // index = index - 1;
                // console.log(alphabetArray, " has been updated at position ", index)
            } if (stringElement !== alphabetArrayElement) {
                // console.log(stringElement, " is not equal to ", alphabetArrayElement)
            }
        }
    }

    // console.log(alphabetArray)

    if (alphabetArray.length >= 1 ) {
        console.log("not pangram")
    } else {
        console.log("pangram")
    }

}

pangrams(example1);
pangrams(example2)