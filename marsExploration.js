// Sample messages for self-testing the function
var sample0 = "SOSSPSSQSSOR" 
var sample1 = "SOSSOT" 
var sample2 = "SOSTOT" 

// My solution creates a corrected SOS string and then compares the input string to this correctMessage string, tallying the differences
function marsExploration(s) {
  // make the correct SOS message then compare it to the string to see where it's incorrect

  // This holds the final tally of changes, start at 0
  var messageTally = 0

  // This counts how many "SOS" messages are contained in the input string
  var numberOfMessages = s.length / 3

  // Creates the expected message, a string repeating the "SOS" message as many times as the input string. 
  var correctMessage = "SOS".repeat(numberOfMessages);

  for (let i = 0; i < s.length; i++) {
    const element = s[i]; 
    // check if letter in input string matches letter in the corrected string at same index position 
    if (element !== correctMessage[i]) { 
      // if letters don't match, add to tally
      messageTally = messageTally + 1;
    } 
  }
  console.log(messageTally);
}

// Expect 3 changed letters as result
marsExploration(sample0); 

// Expect 1 changed letter as result
marsExploration(sample1); 

// Expect 2 changed letters as result
marsExploration(sample2);