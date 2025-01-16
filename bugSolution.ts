function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Modify the function signature to accept an array
function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(" ");
}

console.log(greeterArray(user)); // Correct

// Solution 2: Pass a single string to the function
let userName = user[0];
console.log(greeter(userName)); // Correct