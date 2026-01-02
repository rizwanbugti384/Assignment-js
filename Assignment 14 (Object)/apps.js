const topScorer = students.reduce((top, curr) =>
  curr.marks > top.marks ? curr : top
);

document.getElementById("topper").innerText =
  `Top Scorer: ${topScorer.name} (${topScorer.marks})`;


  const products = [
  { name: "Phone", price: 500 },
  { name: "Laptop", price: 1000 },
  { name: "Headphones", price: 100 }
];

function filterProducts(min, max) {
  return products.filter(p => p.price >= min && p.price <= max);
}

function countWords() {
  const text = document.getElementById("textInput").value.toLowerCase();
  const words = text.split(/\s+/);
  const freq = {};

  words.forEach(word => {
    freq[word] = (freq[word] || 0) + 1;
  });

  const output = document.getElementById("wordCount");
  output.innerHTML = "";

  for (let word in freq) {
    output.innerHTML += `<li>${word}: ${freq[word]}</li>`;
  }
}





const users = [
  { name: "Ali", role: "Admin" },
  { name: "Sara", role: "User" },
  { name: "John", role: "Admin" }
];

const grouped = {};

users.forEach(user => {
  if (!grouped[user.role]) grouped[user.role] = [];
  grouped[user.role].push(user.name);
});

const container = document.getElementById("roles");

for (let role in grouped) {
  container.innerHTML += `<h3>${role}</h3><p>${grouped[role].join(", ")}</p>`;
}



let ascending = true;

function sortProducts() {
  products.sort((a, b) =>
    ascending ? a.price - b.price : b.price - a.price
  );

  ascending = !ascending;

  const list = document.getElementById("productList");
  list.innerHTML = "";

  products.forEach(p => {
    list.innerHTML += `<li>${p.name} - $${p.price}</li>`;
  });
}
 








const items = [
  { name: "Apple", category: "Fruits" },
  { name: "Carrot", category: "Vegetables" },
  { name: "Banana", category: "Fruits" }
];

function filterItems() {
  const checked = [...document.querySelectorAll("input[type=checkbox]:checked")]
    .map(cb => cb.value);

  const list = document.getElementById("items");
  list.innerHTML = "";

  items
    .filter(item => checked.includes(item.category))
    .forEach(item => {
      list.innerHTML += `<li>${item.name}</li>`;
    });
}














