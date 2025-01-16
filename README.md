# Incorrect Parameter Type in TypeScript Function

This example demonstrates a common TypeScript error that occurs when passing an argument of the wrong type to a function.

## Bug

The `greeter` function is defined to accept a string as input and return a string. However, the code attempts to pass an array of strings to the function, which results in a type error.

## Solution

The solution involves either changing the function's signature to accept an array of strings, or modifying the code to pass a single string to the function.