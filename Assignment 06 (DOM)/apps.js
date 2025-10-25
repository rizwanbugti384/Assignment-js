// 1. Change Paragraph Text

document.querySelector("#message").innerHTML = "Welcome!";

// 2. Display Input Value

function displayName() {
    let name = document.querySelector("#nameInput").value;
    document.querySelector("#result").innerHTML = name;
}

// 3. Change Background Color on Click


document.querySelector("button").addEventListener("click", function() {
    document.querySelector("#container").style.backgroundColor = "lightblue";
});


// 4. Change Heading Color


document.querySelector("#mainTitle").style.color = "red";
// 5. Display Number Input

function showNumber() {
    let number = document.querySelector("#num1").value;
    document.querySelector("#output").innerHTML = number;
}
// 6. Button Click Event



document.querySelector(".submit-btn").addEventListener("click", function() {
    console.log("Button Clicked");
});

// 7. Add Two Numbers

function calculateSum() {
    let num1 = parseFloat(document.querySelector("#first").value);
    let num2 = parseFloat(document.querySelector("#second").value);
    let sum = num1 + num2;
    document.querySelector("#sum").innerHTML = sum;
}

// 8. Update Paragraph Text

document.querySelector(".description").innerHTML = "Updated successfully";
// 9. Style Div Box


let box = document.querySelector("#box");
box.style.width = "200px";
box.style.backgroundColor = "green";



// 10. Get and Print Email

function printEmail() {
    let email = document.querySelector("#email").value;
    console.log("Email:", email);
}
// 11. Update Font Size


document.querySelector("p").style.fontSize = "24px";
// 12. Personal Greeting

function showGreeting() {
    let name = document.querySelector("#fullName").value;
    document.querySelector("#greeting").innerHTML = `Hello, ${name}`;
}

// 13. Change Image Source

document.querySelector("#profilePic").src = "new-image.jpg";
// 14. Change Multiple Elements Color

let highlights = document.querySelectorAll(".highlight");
highlights.forEach(element => {
    element.style.color = "orange";
});
// 15. Checkbox Status

function checkAgreement() {
    let isChecked = document.querySelector("#agree").checked;
    document.querySelector("#agreementStatus").innerHTML = isChecked ? "Agreed" : "Not Agreed";
}
// 16. Display Dropdown Selection

function showSelectedOption() {
    let selected = document.querySelector("#options").value;
    document.querySelector("#selectedValue").innerHTML = selected;
}
// 17. Show Current Date and Time

function showDateTime() {
    let now = new Date();
    document.querySelector("#dateTime").innerHTML = now.toString();
}
// 18. Hide Paragraph

document.querySelector("#togglePara").style.display = "none";
// 19. Age Eligibility Check

function checkEligibility() {
    let age = parseInt(document.querySelector("#age").value);
    let result = age >= 18 ? "Eligible" : "Not Eligible";
    document.querySelector("#eligibilityResult").innerHTML = result;
}
// 20. Clear Input Field



function clearSearch() {
    document.querySelector("#searchBox").value = "";
}