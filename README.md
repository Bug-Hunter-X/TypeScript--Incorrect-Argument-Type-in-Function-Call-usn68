# TypeScript Bug: Incorrect Argument Type

This example demonstrates a common TypeScript error: passing an array of strings to a function expecting a single string argument.  The error message clearly states that the argument type ('string[]') is not assignable to the parameter type ('string').

The solution shows how to correctly handle this by either iterating over the array and calling the function multiple times or by modifying the function signature to accept an array.