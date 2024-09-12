#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter from Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: "Enter To Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: 'Enter Your Amount',
        type: 'number'
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedamount = baseAmount * toAmount;
console.log(convertedamount);
console.log(fromAmount);
console.log(toAmount);
console.log(amount);
