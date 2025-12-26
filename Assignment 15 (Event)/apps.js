document.getElementById("bgBtn").addEventListener("click", function () {
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = color;
});












document.getElementById("themeBtn").addEventListener("click", function ()
 {
  document.body.classList.toggle("dark");
});





let count = 0;
const display = document.getElementById("count");

document.getElementById("inc").onclick = function () {
  count++;
  display.innerText = count;
};

document.getElementById("dec").onclick = function () {
  count--;
  display.innerText = count;
};



const textarea = document.getElementById("textArea");
const charCount = document.getElementById("charCount");

textarea.addEventListener("input", function () {
  charCount.innerText = textarea.value.length;
});







document.getElementById("myForm").addEventListener("submit", function (e) {
  const input = document.getElementById("message").value.toLowerCase();
  const banned = ["spam", "test"];

  for (let word of banned) {
    if (input.includes(word)) {
      e.preventDefault();
      alert("Forbidden word detected!");
      return;
    }
  }
});







const cities = {
  Pakistan: ["Karachi", "Lahore", "Islamabad"],
  India: ["Delhi", "Mumbai", "Chennai"],
  USA: ["New York", "Chicago", "Los Angeles"]
};

document.getElementById("country").addEventListener("change", function () {
  const citySelect = document.getElementById("city");
  citySelect.innerHTML = "";

  cities[this.value].forEach(city => {
    const option = document.createElement("option");
    option.text = city;
    citySelect.add(option);
  });
});









document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");

  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";

  if (name.value.trim() === "") {
    document.getElementById("nameError").innerText = "Name required";
    valid = false;
  }

  if (!email.value.includes("@")) {
    document.getElementById("emailError").innerText = "Invalid email";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
  }
});












