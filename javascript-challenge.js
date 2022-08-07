// 1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

function isNumberPositive(number){
    if (number > 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isNumberPositive(7));
console.log(isNumberPositive(-1));
console.log(isNumberPositive(10));



// 2. Write a function that takes a number of days and converts it into an age.

function convertDaysToAge(days){
    return days / 365;
}

console.log(convertDaysToAge(300));
console.log(convertDaysToAge(3650));
console.log(convertDaysToAge(6570));



// 3. Write a function that takes three numbers and returns the largest of the three numbers.

function getLargestNumber(num1, num2, num3) {
    return Math.max(num1, num2, num3);

}

console.log(getLargestNumber(8, 33, 742));
console.log(getLargestNumber(2, 1, 4));
console.log(getLargestNumber(6, 2, 3));



// 4. Write a function that takes an array of names and returns the last name from the array of names.

const ladiesNames = ["Mary", "Irene", "Albina", "Jodie"];
const blokesNames = ["Charlie", "Rob", "Andy"];
const names = ["Ash", "Stu"];


function getLastName(array) {
    const lastItem = array[array.length - 1];
    return lastItem;
}

console.log(getLastName(names));
console.log(getLastName(ladiesNames));
console.log(getLastName(blokesNames));



// 5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.

const numberList1 = [2, 4, 5];
const numberList2 = [-5, 4, 6];


function allNumbersPositive(array) {
    let result = true;
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= 0) {
            result = false;
            break;
        }
    }
}

console.log(allNumbersPositive(numberList1));
console.log(allNumbersPositive(numberList2));

// can't get this one to work!