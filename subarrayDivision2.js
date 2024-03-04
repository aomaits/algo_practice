/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */
// const segments = [2, 2, 1, 3, 2];
// const day = 4;
// const month = 2;

const segments = [2, 4, 1, 5, 5, 1, 2, 7, 2];
const day = 12;
const month = 4;

function birthday(s, d, m) {
  // loop through s, comparing segments with a length of m
  // if they add up to d, add 1 to the count
  // if not, continue

  let possibleBarDivisions = 0;

  for (let i = 0; i < s.length; i++) {
    let sliceTo = m + i;
    // console.log(i);
    // console.log(m);
    // console.log(sliceTo);
    const subsection = s.slice(i, sliceTo);
    let subsectionTotal = subsection.reduce(getSum, 0)
    if (subsection.length === m  && subsectionTotal === d) {
      console.log(subsection)
      console.log(subsectionTotal)
      possibleBarDivisions++;
      // console.log(possibleBarDivisions)
    }
  }

  function getSum(total, num) {
    return total + num;
  }

  
  // console.log(possibleBarDivisions);

  return possibleBarDivisions;
}


birthday(segments, day, month);