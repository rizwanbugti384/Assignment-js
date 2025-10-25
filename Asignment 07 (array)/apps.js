let students = ["Ali", "Sara", "Ahmed"];
students.push("Fatima");
console.log(students); 
// ["Ali", "Sara", "Ahmed", "Fatima"]

let fruits = ["Apple", "Banana", "Orange", "Mango"];
let removedFruit = fruits.pop();
console.log(fruits);
 // ["Apple", "Banana", "Orange"]
console.log("Removed:", removedFruit); // "Mango"

let days = ["Tuesday", "Wednesday", "Thursday"];
days.unshift("Monday");
console.log(days); 
// ["Monday", "Tuesday", "Wednesday", "Thursday"]

let colors = ["Red", "Green", "Blue", "Yellow"];
let removedColor = colors.shift();
console.log(colors);

// ["Green", "Blue", "Yellow"]
console.log("Removed:", removedColor); // "Red"

let subjects = ["English", "History", "Physics", "Chemistry"];
subjects.splice(2, 0, "Math", "Science");
console.log(subjects);

// ["English", "History", "Math", "Science", "Physics", "Chemistry"]


let cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];
cities.splice(1, 2);
console.log(cities); 
// ["Karachi", "Peshawar", "Quetta"]

let countries = ["Pakistan", "India", "USA", "UK", "Canada", "Australia"];
let firstThree = countries.slice(0, 3);
console.log(firstThree); 
// ["Pakistan", "India", "USA"]
console.log("Original:", countries); 
// Original array unchanged


let fruitsString = "apple,banana,mango";
let fruitsArray = fruitsString.split(",");
console.log(fruitsArray); 

// ["apple", "banana", "mango"]

let writingTools1 = ['pen', 'pencil'];
let writingTools2 = ['eraser', 'sharpener'];
let allTools = writingTools1.concat(writingTools2);
console.log(allTools);
 // ['pen', 'pencil', 'eraser', 'sharpener']


 let names = ["Zara", "Ali", "Bilal", "Ahmed", "Sara"];
names.sort();
console.log(names); 

// ["Ahmed", "Ali", "Bilal", "Sara", "Zara"]

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);

// [5, 4, 3, 2, 1]

let colors = ["Red", "Green", "Blue", "Yellow"];
let blueIndex = colors.indexOf("Blue");
console.log(blueIndex); 
// 2

let purpleIndex = colors.indexOf("Purple");
console.log(purpleIndex); 


// -1 (not found)

let numbers = [10, 20, 30, 40, 50];
let middleIndex = Math.floor(numbers.length / 2);
numbers.splice(middleIndex, 1);
console.log(numbers); 

// [10, 20, 40, 50]

