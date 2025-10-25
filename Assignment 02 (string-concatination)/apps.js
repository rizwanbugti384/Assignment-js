// Task 1: Full Address
console.log("=== Task 1: Full Address ===");
let street = prompt("Enter your street:");
let city = prompt("Enter your city:");
let country = prompt("Enter your country:");
let fullAddress = street + ", " + city + ", " + country;
console.log("Your full address is: " + fullAddress);
alert("Your full address is: " + fullAddress);

// Task 2: Custom Username
console.log("=== Task 2: Custom Username ===");
let firstName = prompt("Enter your first name:");
let favNumber = prompt("Enter your favorite number:");
let username = firstName + favNumber;
console.log("Your new username is: " + username);
alert("Your new username is: " + username);

// Task 3: Email Generator
console.log("=== Task 3: Email Generator ===");
let fName = prompt("Enter your first name:");
let lName = prompt("Enter your last name:");
let email = fName.toLowerCase() + "." + lName.toLowerCase() + "@example.com";
console.log("Your email address is: " + email);
alert("Your email address is: " + email);

// Task 4: Favorite Things
console.log("=== Task 4: Favorite Things ===");
let color = prompt("Enter your favorite color:");
let animal = prompt("Enter your favorite animal:");
let food = prompt("Enter your favorite food:");
let favorites = "Your favorite things are: " + color + " " + animal + " and " + food + "!";
console.log(favorites);
alert(favorites);

// Task 5: Quote with Author
console.log("=== Task 5: Quote with Author ===");
let quote = prompt("Enter your favorite quote:");
let author = prompt("Enter the author's name:");
let formattedQuote = '"' + quote + '" - ' + author;
console.log(formattedQuote);
alert(formattedQuote);