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
}

// Expect 3 changed letters as result
// marsExploration(sample0); 

// Expect 1 changed letter as result
// marsExploration(sample1); 

// Expect 2 changed letters as result
marsExploration(sample2);