# algo_practice
A repo to store my algorithm practice

## Flipping 
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
I don't get a chance to use while loops a lot, so I was pretty excited to utilize one here to make sure the binary was filled out to its full 32-bits. 

#### Flip It, Flip It Good

#### Back 2 Binary


### How to Improve This Code