// Task 1: Create an array of fruits and log each fruit
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}






// Task 2: Add color names to a paragraph
const colors = ["red", "green", "blue"];
const outputElement = document.querySelector('#output');
let colorsText = '';

for (let i = 0; i < colors.length; i++) {
    colorsText += colors[i] + ' ';
}
outputElement.textContent = colorsText.trim();




// Task 3: Print numbers 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}



// Task 4: Print numbers 5 to 1 (descending)
let count = 5;
while (count >= 1) {
    console.log(count);
    count--;
}



// Task 5: Change div text to show names separated by commas
const names = ["Ali", "Sara", "Ahmed"];
const namesDiv = document.querySelector('#names');
let namesText = '';

for (let i = 0; i < names.length; i++) {
    namesText += names[i];
    if (i < names.length - 1) {
        namesText += ', ';
    }
}
namesDiv.textContent = namesText;





// Task 6: Change paragraph text to "Loading..."
const statusElement = document.querySelector('#status');
statusElement.textContent = "Loading...";


// Task 7: Calculate sum of numbers in array
const numbers = [5, 10, 15];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

const sumElement = document.querySelector('#sum');
sumElement.textContent = `Total sum: ${sum}`;



// Task 8: Display cities as single string
const cities = ["Karachi", "Lahore", "Quetta"];
const citiesDiv = document.querySelector('#cities');
let citiesString = '';

for (let i = 0; i < cities.length; i++) {
    citiesString += cities[i];
    if (i < cities.length - 1) {
        citiesString += ', ';
    }
}
citiesDiv.textContent = citiesString;





// Task 9: Log only even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Alternative approach:
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}



// Task 14: Print animal values into single paragraph
const animals = ["dog", "cat", "bird"];
const animalsElement = document.querySelector('#animals');
let animalsText = '';

for (let i = 0; i < animals.length; i++) {
    animalsText += animals[i];
    if (i < animals.length - 1) {
        animalsText += ', ';
    }
}
animalsElement.textContent = animalsText;



