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
I started out by setting up a forEach loop to determine how many rows (subarrays) each matrix (array) contained. I soon realized I did not need this separate loop and removed it. 

When setting up my leftToRightDiagonal function, I initially tried to tally the index position of the row and the individual number. Then I realized that both index positions increase at the same rate will always be equal in a matrix. Thus, I simplified the code by using the single index position twice. 
### What I Learned 
### How to Improve This Code