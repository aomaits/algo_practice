const example1 = "We promptly judged antique ivory buckles for the next prize"
const example2 = "We promptly judged antique ivory buckles for the prize"

function pangrams(s) {
    var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"]  
    const lowercaseVersion = s.toLowerCase();

    for (let i = 0; i < lowercaseVersion.length; i++) {
        const stringElement = lowercaseVersion[i];
        for (let index = 0; index < alphabetArray.length;) {
            const alphabetArrayElement = alphabetArray[index];
            if (stringElement === alphabetArrayElement) {
                alphabetArray.splice(index, 1); // remove the matching character from the alphabet array
            } if (stringElement !== alphabetArrayElement) {
                index++ // only increase the index position when no splicing has taken place - NEW ADDITION SINCE SUBMISSION
            }
        }
    }

    // if the alphabet array has not been emptied, the string is not a pangram
    if (alphabetArray.length >= 1 ) {
        console.log("not pangram")
    } else {
        console.log("pangram")
    }

}

pangrams(example1);
pangrams(example2)