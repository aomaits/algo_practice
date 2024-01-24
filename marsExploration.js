var sample0 = "SOSSPSSQSSOR" 
var sample1 = "SOSSOT" 
var sample2 = "SOSTOT" 

function marsExploration(s) {
  // Write your code here

  // make the correct SOS message then compare it to the string to see where it's incorrect
  var messageTally = 0
  var numberOfMessages = s.length / 3
  // console.log(numberOfMessages)
  var correctMessage = "SOS".repeat(numberOfMessages);
  // console.log(correctMessage)
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element !== correctMessage[i]) {
      messageTally = messageTally + 1;
    } //else {
    //   console.log(element + " is equal to " + correctMessage[i])
    // }
  }

  console.log(messageTally);
  // make string into an array of strings w/ 3 letters each
  // check each array object for correctness foreach
  // tally incorrect letters with if ! statements


  // set up a while loop for while the s has letters
  // if SOS, shift? the SOS out
  // if it doesn't match, add a tally for each letter that doesn't match...
}

// Expect 3 changed letters as result
// marsExploration(sample0); 

// Expect 1 changed letter as result
// marsExploration(sample1); 

// Expect 2 changed letters as result
marsExploration(sample2);