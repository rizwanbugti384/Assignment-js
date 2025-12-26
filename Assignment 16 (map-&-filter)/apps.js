const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);











const fruits = ["apple", "banana", "cherry"];
const upper = fruits.map(item => item.toUpperCase());
console.log(upper);





const users = [{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}];
const names = users.map(user => user.name);
console.log(names);









const tasks = ["task1", "task2", "task3"];
const completed = tasks.map(task => task + "-done");
console.log(completed);




const prices = [10, 25, 40];
const formatted = prices.map(price => `$${price}`);
console.log(formatted);




const dates = ["2024-01-01", "2024-06-15"];
const readableDates = dates.map(date =>
  new Date(date).toDateString()
);
console.log(readableDates);










const namesList = ["Joe", "Elizabeth", "Tom", "Anna"];
const longNames = namesList.filter(name => name.length > 4);
console.log(longNames);






const usersList = [
  {name: "Alice", active: true},
  {name: "Bob", active: false}
];

const activeUsers = usersList.filter(user => user.active);
console.log(activeUsers);
