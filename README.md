# Algo Practice
This repo is to publicize my algorithm practice and talk through my problem-solving process. I am still very new to solving algorithms so I am learning a lot with each one. I'll break down the problems I encountered and how I solved them in this README.

## Flipping Bits
> You will be given a list of 32 bit unsigned integers. Flip all the bits (1 -> 0 and 0 -> 1) and return the result as an unsigned integer.

### Problem Solving 
I started by breaking down the problem into three steps: 
- convert the input to binary
- flip every binary number to its opposite
- convert my new binary number back to a decimal integer 

### What I Learned 
#### Binary Numbers
I didn't know how to read binary numbers. That is, I knew a binary number could be either a 0 or a 1, but I didn't realize stringing them together would set a number equal to a digital integer based on their location. So that was new! 

#### Conversion to Binary
Once I learned how binary numbers represent decimal numbers, I figured that there must be a mathematical conversion to convert a decimal number to its binary equivalent. I searched for the mathematical formula, and sure enough, there was one as expected! I learned about dividing recursively by 2 and keeping the remainders. The remainders are listed in reverse order to represent the binary number so I unshifted each new remainder value to the front of my array. 

At first this didn't work as expected- I then realized I needed to bring in the `Math.trunc` method when dividing to keep my number from breaking down into smaller and smaller decimals and looping infinitely. 

#### Make it 32 bits
I don't get a chance to use while loops a lot, so I was pretty excited to include one here to make sure the binary was filled out to its full 32-bits. 

#### Flip It
Like the earlier while loop, I haven't used `.forEach` much. I've tended to just use for loops and customize them as needed, so I challenged myself to use forEach instead. Targeting the value of the number was working fine with my if/else logic, but my first attempts to change each value in the original array weren't working. That's when I realized it might be a lot easier to just create a new array and push in the new values- there was no need to keep using the same array.

#### Back 2 Binary
The last step was changing the binary number back to a decimal. Much like converting a decimal number to its binary equivalent, I suspected that there was a way to do the inverse using a mathematical formula. I used the doubling method, which is where you move left to right through a binary number, doubling the previous total and adding it to the current value. The leftmost value in the binary will only produce itself using this method, because you add the first value to `0 * 2` (seeing as there is no prior value, 0 is the number one is doubling here). After that, the value produced is then multiplied by 2 and added to the following digit, growing as you move through the binary until you've add on the rightmost value. 
I initially had two if statements, one for the leftmost value and one for the rest of the binary numbers. What I did not immediately realize about this equation is that the final result will give the full answer to the doubling process. You only need the prior results to inform the final equation:

` ( x * 2 ) + y = z`
- x: The result of the previous equation
- y: The leftmost value in the binary number
- z: The full decimal representation of the binary number


Once I understood this, I set up a separate if clause for the final value and returned only that value. 

### How to Improve This Code
The most room for improvement in this solution comes from shortening the function through the use of built-in Javascript methods. My solution was fairly space and time efficient. 

#### .toString(2)
I did not know there was a built-in method to turn numbers to a binary string! I would have missed the math I learned had I utilized this, but it would have saved a lot of lines of code. 

#### .padStart
I wouldn't have guessed that there was a built-in method to pad the front of a string. Now I know. 

#### parseInt(x, 2)
Using parse to a radix of 2 will turn a decimal number back to binary. Technically, both this and padStart are string methods, but it doesn't look like the type was crucial for this problem, just that the values were correct. 

#### Big 0 Notation
I'm still learning about space and time complexity in programming, but I asked ChatGPT to evaluate my solution and it said: 

> Overall, the time complexity of your `flippingBits` function is determined by the `convertToBinary` function, which is `O(log n)` due to the logarithmic loop.

It added that the space complexity of this function was relatively low as well. 

My objective was a working solution and I acheived that, but I know solving for efficiency is the next step in my development. 

## Diagonal Difference
> Given a square matrix, calculate the absolute difference between the sums of its diagonals.

### Problem Solving 

#### Unnecessary Loop
I started out by setting up a forEach loop to determine how many rows (subarrays) each matrix (array) contained. I soon realized I did not need this separate loop and removed it. 

#### Summing Up the Left-to-Right Diagonal
When setting up my leftToRightDiagonal function, I initially tried to tally the index position of the row and the individual number. Then I realized that both index positions increase at the same rate will always be equal in a matrix. Thus, I simplified the code by using the single index position twice. 

#### Summing Up the Right-to-Left Diagonal
This was not so simple on the rightToLeftDiagonal function. Whereas before the index of the subarray matched the index of the number within that subarray when moving on the left-to-right diagonal, the indices would have to start at the opposite poles in this function and cross. 

For example, if we were given a matrix of 3 rows and 3 columns, we would need the index of the first subarray to be `[0]`. The value we need to access from that first row is on the far right, so it would have an index of `[2]`. While the subarray index climbs for the next few rows, the index of the value from within the subarray falls. They would overlap in the next row (the center of the matrix). Finally, the subarray's index would be up to `[2]` while the value's index would now be down to `[0]` for the final row.

I scratched my head on this one a bit before setting up an inverse `for` loop to count backward through the subarrays. I then set up a separate variable to track the increasing index position within the subarray and added the value at these two indexes to the running total. 

#### Finding the Difference

Finding the difference was pretty simple. I initially started to construct a 3rd function, but soon realized that wasn't really necessary and just wrote it as two lines of code and a return. The first line finds the value of the difference between one value and the other. As this could be a negative result, I then added one more line of code to use the built-in `Math.abs` method to assign the absolute value of the difference to my final variable. Lastly, I returned the variable. 

### What I Learned 
I got to use the `Math.abs` method for the first time in one of these algorithms. I wasn't surprised to find that JavaScript had it built in. 

I also practiced using a reverse for loop, something I had seen once or twice but hadn't constructed myself. 

### How to Improve This Code

#### Single Loop
I wasn't sure how to get to the subarray value directly so I set up some variables to represent the subarrays. I also set up two distinct for loops for my solution. I found a simple solution to this problem that another user posted where they only used a single for loop. In this solution, they had a running total of the difference, finding the difference line-by-line and summing up that difference through the whole matrix. They were able to solve the problem with about 1/5th of lines of code that I wrote.   

#### Big O Notation
As far as time complexity, my solution was `0(n)` because the two functions are independent. Thus, the time complexities of their loops don't add up. The simple arithmetic at the end has a constant time complexity. 

## Counting Sort 1
>  Comparison Sorting

> Quicksort usually has a running time of `n x log(n)`, but is there an algorithm that can sort even faster? In general, this is not possible. Most sorting algorithms are comparison sorts, i.e. they sort a list just by comparing the elements to one another. A comparison sort algorithm cannot beat `n x log(n)` (worst-case) running time, since `n x log(n)` represents the minimum number of comparisons needed to know where to place each element.

> Alternative Sorting

> Another sorting method, the counting sort, does not require comparison. Instead, you create an integer array whose index range covers the entire range of values in your array to sort. Each time a value occurs in the original array, you increment the counter at that index. At the end, run through your counting array, printing the value of each non-zero valued index that number of times.

### Problem Solving 

I had to re-read this problem a few times to understand what was expected here. When I started, I still misunderstood the solution, and created an array that had 100 index positions, and the number at each position was exactly equal to its index position. 
Realizing I didn't need this array, I wrote a few new lines of JavaScript to create an array with 100 index positions that held only zeros. This is the starting version of the `resultArray`. I now had something to tally up the instances of each value from the input array. 
The second step was to create a simple `for` loop with two steps in it: 
- First, I used the built-in `at` array method to find the initial tally at a given index position and assign it to the variable `startingTally`
- Second, I utilized `splice` to remove the startingTally value from the `resultArray` and replaced this value with itself + 1 at the same index position. 
I was very excited that this worked on the first try! 
 
### What I Learned 

I hadn't used the `at` function recently, so I was able to get a quick refresher on that. 

Most notably, though, was this new (to me) idea of how to solve a counting sort problem. I still don't fully understand the discussion on the run time of Comparison Sorting, but I found this alternative sorting method pretty interesting. It was also another reminder that there are usually multiple ways to solve a problem. 

### How to Improve This Code

This was a pretty quick solution. It has a time complexity of O(n). 

It would have been O(n + k) with `k` representing the possible values in the input array. However, we know that the range of values in the input array is a constant, therefore the time complexity simplifies to O(n). 

#### fill()

I saw an example submission using the `fill` method to build the initial array of zeros. I think that this is a great use of that array method and probably would do the same if I were to create it again. 

#### map()
Mapping over the array would have been less wordy than using a `for` loop with the `splice` and `at` methods indside of it. With `map`, I could have directly acted upon each element of the `resultArray` to increase its value by 1. 

## Counting Valleys
> An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly `steps` steps, for every step it was noted if it was an uphill, `U`, or a downhill, `D` step. Hikes always start and end at sea level, and each step up or down represents a `1` unit change in altitude. We define the following terms:

> A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
> A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.

> Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

### Problem Solving 
I tried implementing the split method so that I could loop through each letter in the string, but I ran into trouble right away. It took me a moment, but I realized that, locally, I had set up the practice string as an array. After correcting that, I set up a `forEach` and got to work. 

I had the idea that I only really needed to know when a hiker **entered** a valley. I created the `fullHikeArray` so that I could catalog the full hike, capturing where the hiker was in relation to sea level throughout by pushing in the `currentLocation` value after each element. Using this array, I then set up some `if` logic to account for whether the hiker was heading uphill or downhill. Uphills are added to the current relation to sealevel (`currentLocation`) while downhills are subtracted. 

I passed one of the two tests with this setup, but failed the second on the initial run. Going back to look at my code, I recognized the edge case I'd missed. While my code was correctly finding when a hiker came from above sea level and entered a valley, I hadn't accounted for the instance where the hiker enters a valley at the start of the hike. Since there would be now prior index position in the `fullHikeArray` to indicate that this hiker was starting above sea level and entering a valley, I was missing this initial descent. I add some `||` logic to acount for instances where the downhill began before the `fullHikeArray` held any values, and all tests then passed!

### What I Learned 
I'm getting better at this! I got to the solution here faster than I have in previous algorithms.

None of the methods I used were new. I think it helped having seen some previous solutions using blank arrays and tallys so I quickly landed on a possible means of solving this problem. 

### How to Improve This Code
The logic here is really controlled and there were only two tests in the official solution, so I could certainly be missing some edge cases. I think in real world practicality there'd be thousands more edge cases to account for if you were to try and create the logic to tally the valleys entered on a hike! 

I saw a good solution using a `For In` loop, which isn't something I have used before. We were given the steps, which I didn't utilize. This user had a much shorter solution by using that key in object structure. 

I also saw an interesting solution using two loops and a couple while conditions. The first loop would count whenever a hiker entered a valley and the second loop would then tally until they left. I assumed that this second loop would increase the space/time complexity, but it looks like it's the same as what I acheived with only one loop. 

#### Space / Time Complexity

With a space and time complexity of `O(n)`, this code runs pretty efficiently. The time complexity is `O(n)` where `n` is the number of steps in the hike; the space complexity is `O(n)` as well because the `fullHikeArray`'s full length will only be as long as the number of steps in the hike.

## Pangrams
> A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

### Problem Solving 
I started by creating a regex and attempting to use JavaScript's match function to compare the regex to the input string to make sure that the input string contained all letters in the regex. I created a regex for both uppercase and lowercase which made me realize that I could simply use the built-in `toLowerCase` function (or its inverse) and bypass the need for an `|` along with a second alphabet in the regex. 

The regex I had was still clunky, and I wasn't too fond of trying to dynamically manipulating it. Maybe I could make part of the regex a variable that could change...I ultimately decided to ditch the regex idea because I wasn't sure how to implement it simply. 

What I instead decided to do was to take that regex of lowercase letters and make it an array, `alphabetArray`. My idea was to pull out the used letters from this alphabetic array while looping through the given string. If `alphabetArray` had letters leftover, the program would return `"not pangram`. But if it was empty, the program would correctly return `pangram`. My first attempt at creating this array didn't run correctly, so I updated the `alphabetArray` to be an array of individual characters.

I tried to come up with a more efficient and elegant means of implementing my removal approach, but what came to mind ultimately was to stack a `for` loop inside of another `for` loop. The first loop starts with the first letter in the lowercase version of the given string, `lowercaseVersion` and then the inner loop checks that letter against the `alphabetArray`, removing the matching letter from `alphabetArray` if it exists there. 

I then ran into trouble using the `splice` method. I thought I would have to counteract the index position increase of the inner `for` loop once the `if` statement triggering the splice had run. I attempted to reduce the index position by 1 inside of that `if` statement before it increased again while continuing the `for` loop, but the inner for loop stalled and I could only get to the 0th index position of the alphabet. 

I fixed this issue by removing that index reduction logic completely. The program worked! I ran it in HackerRan and it failed. That was when I caught the spelling error I'd made in the word `"pangram"`. 

Fixing that spelling error, my solution passed all test cases! Full success!!!

...or so I thought. 

#### Untested Edge Case!
There are 8 test cases on the HackerRank problem and I suppose none of them put my `index++` loop issue to the test. However, my program, as originally written, **was** skipping an index position in the `alphabetArray`. That meant that if a word like `"About"` had been in one of the test cases, my program would have incorrectly skipped the letter `"b"` and failed to remove it. The `"a"` in the 0th position would be removed, leaving `"b"` in the 0th position. However, when comparing the `"b"` at the 1st index position of the `lowercaseVersion` array, the program would have already increased the index position of the inner loop. That means the `alphabetArray` loop would now be on to index 1, and would never see the match for the letter `b` down in the 0th position. 

In short, my program did not account for a string requiring that two consecutive alphabeticals be removed from the `alphabetArray`. While this did not prevent me from submitting the "correct" response on HackerRank, I realized the issue while typing up this recap. 

I suspected a better fix would be simply to move the `index++` for the inner loop to the second conditional statement. This worked, keeping the index position of the inner loop steady when a splice is made and increasing it when there was no match! 

### What I Learned 
This solution is a representation of the possible downside I've heard spoken about when engineers "write to the test". My given solution passed all tests, but clearly the given tests did not provide for all edge cases. This was my first experience writing code that tested well but could have shown a glitch once pushed to production. 

Of course, this is not to critique Test Driven Development or any approach where testing is emphasized- if anything, the testing here is not robust enough! What I learned is that just passing the tests is not everyting, an engineer/developer should always be accounting for as many edge cases as possible. 

### How to Improve This Code
Aside from the improvements I made by fixing for an edge case, the most obvious improvement to the code that I saw would be to reduce the time complexity. This could be achieved by simply reducing from two `for` loops to simply a single loop. Many of the solutions I saw took a similar tact to mine, but there was a TypeScript solution using the `includes` array method to loop through only the alphabet array. By comparing the looping alphabet array to see if each letter is included in the given string, this user was able to reduce the time complexity to O(n). The time complexity on my loop-inside-of-a-loop solution, by contrast, was O(n^2). 

## Mars Exploration
> A space explorer's ship crashed on Mars! They send a series of SOS messages to Earth for help.

> Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, `s`, determine how many letters of the SOS message have been changed by radiation.

### Problem Solving 

I pseudocoded two ideas before finally settling on my third idea. 

#### An Array of Strings? 
My first idea was to break down the long SOS message into an array of strings, each with its own SOS message. For example, the message `SOSSOS` would be broken down to an array, something like this: `sosArray = ["SOS", "SOS"]`. From there, I figured I would check each string within the larger array to see if it equaled SOS. That's where I decided to switch tactics- I wasn't sure how having the smaller SOS strings was actually going to help me. My best ideas were to set up multiple if statements or to loop through each string. I wasn't conviced this was the best approach after all, so I scrapped it. 

#### Shift Out Each SOS?
My second idea was to use JavaScript's built-in `shift()` method to remove each SOS from the beginning of the string. Once it was pulled it out I would compare it to the string `"SOS"`. If it matched, I would get rid of it. If it didn't match, I would tally up the incorrect letters.

I basically ran into the same issue with this approach as I had with the first. I didn't think separating out the individual SOS messages would help me that much, since I'd still have to compare each of them letter-by-letter to see how many incorrect letters I needed to tally. 

#### Create a Correct String for Comparison

Dropping the idea of breaking down the string into smaller SOS messages, I wondered if I could create a correct string of the same length that I could compare letter-by-letter to the input string...

I first set up my `numberOfMessages` variable to count the number of SOS messages from the input string by taking `s.length` and dividing that by 3. I console logged this to make sure my various data types were interacting as expected. So far so good. 

I hit a snag trying to multiply the string `"SOS"` by 3. Even JavaScript didn't want to try and multiply a string by a number. A quick search on StackOverflow put me on to the `repeat()` method. I hadn't used that before. It worked like a charm- I made a new string, `correctMessage`, equal to `"SOS"` repeated `numberOfMessages` times. 

I had initially hoped to use a `forEach` loop for extra practice with that method  while looping through these two strings. Realizing I would need to access the index value, I quickly reverted to a standard `for` loop. I set up the `for` loop to compare the letter of the input string (`s`) to the letter of the corrected string (`correctMessage`) at the same index position. Since we were looping through both strings simultaneously, I was confident this would have a low time complexity. I also initially included an else clause to double-check that everything was behaving as expected. I ran the function against three samples and it correctly tallied each one! 

### My Progress

This was my quickest solve yet, despite several starting rounds of pseudocoding. I did a good job of avoiding wasted time on those initial solutions whose implementation I couldn't fully visualize. I also used my resources well- turning to StackOverflow for the multiplication issue yielded immediate results. In earlier solutions, I don't know if I would have had the conviction that this approach could work and might have redirected instead. 

### What I Learned 

I think the most important learning here was noted above- discovering and putting into practice JavaScript's `repeat` method. I think this problem was mostly a reinforcing of problem-solving principles and concepts and provided practice at solving algorithms more quickly. 

### How to Improve This Code

I found a solution in the discussions on HackerRank that resembled what I was trying to do with my first approach. This solution was simpler than creating an array of strings. Instead, it used a `for` loop that incremented by 3 instead of just moving forward by 1. Then it used three `if` statements to compare to the `S`, the `O`, and the `S` and increase the tally where there wasn't strict equality. 

I'm still using ChatGPT to help me analyze the Big O notation for these solutions. I suspected that this solution would have a relatively low time demand. I believe the overall time complexity for this program is `O(n)`. 

## Flipping the Matrix - Test
> Sean invented a game involving a `2n x 2n` matrix where each cell of the matrix contains an integer. He can reverse any of its rows or columns any number of times. The goal of the game is to maximize the sum of the elements in the `n x n` submatrix located in the upper-left quadrant of the matrix.

> Given the initial configurations for `q` matrices, help Sean reverse the rows and columns of each matrix in the best possible way so that the sum of the elements in the matrix's upper-left quadrant is maximal.

### Problem Solving 
I was unable to solve this problem in the 30 minutes allotted for the test. I found the problem and worked on it more afterward, but couldn't get a valid solution submitted.

#### Learning from Failure
During the test I had a few ideas. I thought I could tally each subquadrant of the matrix, checking to make sure that the top left quadrant was the largest. If it wasn't, I figured I could proceed to flip a column where the top values were lower than the bottom values. I wasted some time trying to splice out the subarrays before figuring out the correct syntax for accessing the subarrays. I also spent time trying to figure out how to scale it before settling on solving the test case first. I soon ran out of time.

Even after the test was over, my code was a mess. I thought I could just move through the columns, checking to see if one needed flipped based on whether or not it was bottom heavy, but that's actually not the optimal answer because you may be better off changing another row or column first.  

I then wrote a set of really complicated if statements that checked if a column should be flipped based on not only if it was bottom heavy but making sure doing so wouldn't mess up a row flip instead. I thought I had a pretty elegant solution where, for example, two numbers are greater than the two above them and greater than the sums of either those two numbers plus the number next to them- but the conditionals got really cumbersome and weren't performing how I thought they should. Plus, this only solved for a matrix of this size- even if it worked I wasn't sure how I would make it dynamic. 

I figured I was missing a mathematical formula for dealing with matrices, so I turned to ChatGPT. I learned from the response that the problem wasn't a missing mathematical formula. My problem was that I was working toward the solution of the game as presented in the problem. Following the example, I was trying to figure out how to get my program to flip column 2 and then flip row 0. While this is how players of the game would solve the matrix puzzle, the actual answer output is the maximal sum of the upper left quadrant. 

####  The Solution
ChatGPT gave me a solution and I still didn't understand it. It seemed too short. I adjusted some of the variable names so that they were more descriptive. I asked for a breakdown of the `Math.max` function's use and I added lots of console logs so that I could follow what was happening. I believe I'd made the right call to ask for help- I had been really far off base with my problem solving. 

The way that the given solution works is that it doesn't bother with actually creating any matrix or flipping columns or rows. It solves the problem by figuring out what the maximum value could be at each of the locations in the top left quadrant. For example, if we start at row 0, column 0, the program will compare that top left corner number with the bottom left corner, the top right corner, and the bottom right corner. Wherever the highest number is located doesn't really matter, but this `maxSum` value will be added to the `maxValue` variable. (In our example, the highest corner value is at `matrix[0][3]`, the top right: 119.) This finds the highest possible value for the top leftmost number, regardless whether that value has to get there from flipping a row or a column. 

The program will run as many more times as it needs to, given the size of the matrix. For the example solution, it runs through four times, twice in the inner loop and twice in the outer. In the inner loop, the program moves through the columns of a row of the matrix; in the outer loop, the program moves onto the next row in the matrix.

### My Progress
An unsolved solution doesn't feel like progress, and it's disappointing that I was so far off with my approach. As I looked through the discussion on HackerRank, though, I saw that many others had taken a similar route. I saw a few folks who used logic more similar to what I had, taking the time to build out the matrix or asking about how to flip the columns or rows. 

If I can say there's progress, it's in knowing when to ask for help (in my case, AI) and it what I learned after the fact.

### What I Learned 
I should have taken more time to try and read the solution and really figure out what was being requested. I also learned about the `Math.max` function- this was my first time seeing that. I learned about a simpler way to approach this problem or problems similar in the future.

### How to Improve This Code
I made few adjustments to improve the code. I added a few descriptive variables and a couple comments. Otherwise, I have no feedback for the code solution here. 

The time complexity is O(n^2) where `n` is size of one side of the square matrix. 

## Permuting Two Arrays
> There are two `n`-element arrays of integers, `A` and `B`. Permute them into some `A'` and `B'` such that the relation `A'[i] + B'[i] >= k` holds for all `i` where `0 =< i =< n`.

> There will be `q` queries consisting of `A`, `B`, and `k`. For each query, return YES if some permutation `A', B'` satisfying the relation exists. Otherwise, return NO.

### Problem Solving 

I tried to solve this problem in multiple ways, but ultimately fell short. I did create my own mathematical shortcut that solved for all test cases except one, but when I stepped back from it, I quickly realized that this shouldn't have worked as frequently as it did. Here's what I had been trying: 

#### 1. Double For Loop
I set up a `for` loop inside of another `for` loop to see if each element of the second array could be added to at least one element in the first array and equal `k`. This doesn't work for a couple reasons, but the most obvious to me was that the values in the second array could all be using the same index position from the first array to equal `k`, which is not what the problem is asking for. 

#### 2. Single For Loop
I then tried using only a single `for` loop to compare both arrays at once. If they didn't add up to `k` at every index, I would simply shuffle the first array by pushing and shifting a number each time. Then I realized this still wouldn't cover all possible iterations of an array.

#### 2.1 Single For Loop with Separate Shuffling
I thought I could use that same single `for` loop check from my second attempt, but the array shuffle needed to be more complex. While one function checked the two arrays, it could call a second function to shuffle the arrays. With this function I could just shuffle the final two digits and try again, then the final three, eventually working my way back through all possible permutations of the array to check and make sure that they could be matched. This quickly got overwhelming when I realized how many permutations even relatively short arrays had (the constraints provided an array length greater than or equal to 1 but less than or equal to 1000!). 

#### Mathematical Equation
4. I came up with a mathematical solution when I read what I mistook for an unintended hint in the explanation of a particular example of the problem: 

> To permute `A` and `B` into a valid `A'` and `B'`, there must be at least three numbers in `A` that are greater than `1`.

Ah-ha! There it was! 
I could simply subtract `k` from each element in `B` to create a (mostly negative valued) difference array, `diffArray`. I could then add `diffArray` at each element to `A` to create my `balanceArray`. Finally, I could loop through `balanceArray` and total up the values. If this final sum, `balanceSum`, was less than 0, I knew that there was no permutation of the two arrays that could be added together to equal `k` at every digit. However, with a value of 0 or higher, there was a permutation that would work. 

When all but 1 test case passed, I initially thought I'd gotten really close. When I dug in and saw where I'd gone wrong, I wasn't sure how it could be fixed. 

Here's an example of where it goes wrong. Let's say: 

`A = [1, 2, 2, 1]`

`B = [3, 3, 3, 4]`

`k = 5`

You can look at the above and see that it won't work, and no shuffling will fix that. My mathematical shortcut, too, would support that response. It would return a `balanceSum` of `-1`.  

However, you can trick my shortcut into thinking that these arrays will be able to match up by increasing one of the **other numbers** in the arrays. For example, let's change `A` so that it has a higher value at `A[2]`: 

`A = [1, 2, 3, 1]`

`B = [3, 3, 3, 4]`

`k = 5`

This would now return a `balanceSum` of `0`, so my program assumes that this can work. It can't, though, because `B` doesn't have two `4`s, and we need two `4`s to be added to the two `1`s in `A` to equal the target `k`, which is `5`. 

Unsure where to go, I asked ChatGPT if there was a way to fix my math. Instead, I received a completely new approach and solution to the problem. I was frustrated initially, but this was ultimately a good thing, as I had been pretty far off base. I hadn't thought of simply sorting the arrays first! The provided solution was far simpler. It sorted both arrays by value then invertedly added them together. While one array was moving up from the 0th index, the other would be moving down toward it. If any value resulted in less than `k`, the permutation had been shown not to work. 

### My Progress
It doesn't feel like progress to just be given the solution. I've seen arrays sorted in prior solutions before, so I knew that was an option, I just didn't think of it here. I was disappointed and frustrated that I'd overlooked this solution. This challenge was more a learning opportunity and less of a measure of progress.

### What I Learned 
I learned to take things back to the very beginning when thinking through a problem. My first ideas weren't impossible, they were just really, really cumbersome. I knew there was a better solution out there, but I couldn't figure out what it was. 

I don't think I'll forget about the `sort` method again. 

### How to Improve This Code
I didn't write the final solution, but there's nothing flawed that jumps out to me here. 


## Subarray Division 2
> Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

>  Lily decides to share a contiguous segment of the bar selected such that:
- The length of the segment matches Ron's birth month, and,
- The sum of the integers on the squares is equal to his birth day.

> Determine how many ways she can divide the chocolate.

### Problem Solving 
Upon reading the problem, I had an idea that I could loop through `s`, pulling out a chunk of it that had a length of `m` to compare to see if the values within that would add up to `d`. I then planned to add 1 to the count if they did add up and return the count at the end of the problem. 

Although I had to tweak it as I put it into practice, I was able to use this approach to solve the problem.

#### Avoiding a Second Loop with the slice() Method
After copying the problem over to my VSCode, I transferred over the examples from the problem and made sure these were being passed in correctly with some console logs. 

I then set up a `for` loop. I initially set this loop up to increase at a rate of `m`, but then realized I still needed `i` to increase by 1 with each loop, otherwise I might skip valid contiguous segments. I knew that I wanted to compare `m` number of index positions with each loop, but wasn't sure how to do that initially. I considered adding a second for loop to count up the number of positions from `i` until it reached the `i` + `m` position, but I wanted to avoid the second loop. I swiftly realized I would need to make some sort of subarray copy.

I used the `slice()` method, but at first didn't implement it correct, as it worked on the first `for` loop and then fell apart. I had set the `slice` parameters to end at `m - 1`, but what I really needed was for that ending parameter to shift along with the index. I adjusted `subsection`, the variable where I was holding each subsection of the array, to end the slice at `i + m - 1`. This still wasn't quite right though, as I immediately saw in the console logs. Reading again about the `slice` method, I realized my mistake was in the the second value I was passing- the `slice()` method would select elements beginning at the start element and up to- **but not including**- the end argument. I adjusted `subsection` to end the slice at `i + m`.

#### Avoiding a Second Loop with the reduce() Method
Now I wondered how to add up the totals of this subarray, `subsection`, so that I could check whether or not the total was equal to `d`. I briefly considered a `for` loop, but figured that there was likely a better built-in method I could take advantage of. A quick search gave me the `reduce()` method. I was able to implement this with only minor tweaks from a shown example. I even used the same name for the function, `getSum`. This all worked. 

#### An If Statement and a Counter
I already had an `if` statement in place to make sure that the `subsection.length` was equal to `m`. To this conditional statement I added a check that `subsectionTotal` (the reduced total of this particular subsection) was equal to `d`. 

Lastly, I added my counter, `possibleBarDivisions`. If both `if` statement conditions were met, I would tick up the counter. 

#### Final Check
The program seemed to be running as intended, but I only had one example. I started toying with the imputs to make sure that everything was working as expected. After passing it through a few tests where I manipulated the data manually, I was ready to run and submit the code in HackerRank, where it passed all tests.

### My Progress
This was a quick solution. I did a good job of breaking down this problem and knowing what tools I had available to solve it. Anything that didn't behave as expected was quickly rectified with some console logging and additional reading. 

### What I Learned 
Using the `reduce()` method was new for me. I'd seen it prior, I just hadn't had an opportunity to use it myself. 

### How to Improve This Code
With a time complexity of `O(n)`, I think this solution is pretty efficient. I did see a much more concise solution on the messageboard. It used the same methods, `slice()` and `reduce()`, but it used arrow functions and ternary operators and avoided variables to reduce the length of the code.  


## XOR Strings 3
> In this challenge, the task is to debug the existing code to successfully execute all provided test files.

> Given two strings consisting of digits 0 and 1 only, find the XOR of the two strings.

> Debug the given function strings_xor to find the XOR of the two given strings appropriately.

> Note: You can modify at most three lines in the given code and you cannot add or remove lines to the code.

### Problem Solving 
My first step was to try to understand XOR a little. I could not solve this problem without that base. 

#### XOR
I briefly read through the linked Wikipedia page on `Exclusive or` before understanding what was needed here. XOR would be true (or evaluate to `1`, in our case) whereever the inputs differ. It would evaluate to false (`0` for us) when the inputs were the same.  

#### A JavaScript Solution! ...rejected
I was a bit confused by the basic JavaScript input. I turned to ChatGPT for an explanation and to see if there was a way for me to split apart the input so that I could compare the two lines of the string. Splitting on the `/n` character worked. 

From there, I set up a simple `for` loop to compare the two strings character-by-character. I then appended the results to a variable, `xorOfStrings`. Console logging this variable, I saw that it was producing the correct result. 

However, my submission was not accepted. I assumed this was for the lines of code I'd had to add. Frustrated, I turned to ChatGPT for an answer that wouldn't add any code. This didn't work either, though- ChatGPT couldn't solve the problem without adding lines of JavaScript. Confused, I then turned to the HackerRank Discussions page for the problem and found this from 2 days ago: 

>It is not showing the function for a lot of languages. I tried C++ and kept getting wrong answer even though it was exactly as expected output. Had to change to Java 7 to get right answer. This task needs to be fixed...

And from a week ago: 

>There is no function shown in JS. Changed to Python & TypeScript and see the function now.


I decided to try a different tact and switched to Python, too. 

#### Python! 
 

#### 

### My Progress


### What I Learned 


### How to Improve This Code
