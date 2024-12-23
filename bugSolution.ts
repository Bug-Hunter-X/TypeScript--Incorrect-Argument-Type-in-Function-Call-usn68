function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(people: string[]): string[] {
  return people.map(person => greeter(person));
}

let user = ["Jane User", "John Smith"];

console.log(greeterArray(user)); // Correct: ['Hello, Jane User', 'Hello, John Smith']
//console.log(greeter(user)); // This line will still produce the original error