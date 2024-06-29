#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

let quiz = await inquirer.prompt([
  {
    name: "q1",
    type: "list",
    message: "What is TypeScript primarily used for?",
    choices: [
      "A) Memory Management",
      "B) Dynamic Typing",
      "C) Static Typing",
      "D) Asynchronous Operations",
    ],
  },
  {
    name: "q2",
    type: "list",
    message: "Which of the following is NOT a valid TypeScript data type?",
    choices: ["A) void", "B) any", "C) dynamic", "D) tuple"],
  },
  {
    name: "q3",
    type: "list",
    message: "How do you denote a variable as readonly in TypeScript?",
    choices: ["A) const", "B) static", "C) readonly", "D) fixed"],
  },
  {
    name: "q4",
    type: "list",
    message:
      "How do you specify that a function does not return anything in TypeScript?",
    choices: [
      "A) function myFunc(): undefined",
      "B) function myFunc(): void",
      "C) function myFunc(): null",
      "D) function myFunc(): None",
    ],
  },
  {
    name: "q5",
    type: "list",
    message: "How do you define a custom type in TypeScript?",
    choices: ["A) interface", "B) typedef", "C) type", "D) Both A and C"],
  },
]);

let score: number = 0;

switch (quiz.q1) {
  case "C) Static Typing":
    console.log(`1. Correct Answer!`);
    ++score;
    break;
  default:
    console.log(chalk.red(`1. Incorrect Answer!`));
}

switch (quiz.q2) {
  case "C) dynamic":
    console.log(`2. Correct Answer!`);
    ++score;
    break;
  default:
    console.log(chalk.red(`2. Incorrect Answer!`));
}

switch (quiz.q3) {
  case "C) readonly":
    console.log(`3. Correct Answer!`);
    ++score;
    break;
  default:
    console.log(chalk.red(`3. Incorrect Answer!`));
}

switch (quiz.q4) {
  case "B) function myFunc(): void":
    console.log(`4. Correct Answer!`);
    ++score;
    break;
  default:
    console.log(chalk.red(`4. Incorrect Answer!`));
}

switch (quiz.q5) {
  case "D) Both A and C":
    console.log(`5. Correct Answer!`);
    ++score;
    break;
  default:
    console.log(chalk.red(`5. Incorrect Answer!`));
}

console.log(chalk.bold.yellow(`Your score is ${score}.`));