process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    var xorOfStrings = "";
    // Split the input into an array of lines
    const lines = input.trim().split("\n");
    
    // Extract the first string (s) and the second string (t)
    const s = lines[0].trim(); // First line
    const t = lines[1].trim(); // Second line

    // Now you can interact with the strings s and t
    // console.log("First string (s):", s);
    // console.log("Second string (t):", t);
    
    for (let i=0; i<s.length; i++) {
        if (s[i] === t[i]) {
            xorOfStrings+="0"
        } else {
            xorOfStrings+="1"
        }
    }
    console.log(xorOfStrings.trim())
});