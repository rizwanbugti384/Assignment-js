javascript
function checkGrade(marks) {
    if (marks < 0 || marks > 100) {
        return "Invalid Marks";
    } else if (marks >= 80) {
        return "Distinction";
    } else if (marks >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

// Testing
console.log("Grade 85:", checkGrade(85));    // "Distinction"
console.log("Grade 45:", checkGrade(45));    // "Fail"
console.log("Grade 65:", checkGrade(65));    // "Pass"
console.log("Grade 105:", checkGrade(105));  // "Invalid Marks"


// 2. Discount Eligibility

function checkDiscount(age, isPremiumMember) {
    if (age >= 60 && isPremiumMember) {
        return "Senior Premium Discount";
    } else if (age >= 60) {
        return "Senior Discount";
    } else if (isPremiumMember) {
        return "Premium Discount";
    } else {
        return "No Discount";
    }
}

// Testing
console.log("Age 65, Premium:", checkDiscount(65, true));   // "Senior Premium Discount"
console.log("Age 70, Not Premium:", checkDiscount(70, false)); // "Senior Discount"
console.log("Age 25, Premium:", checkDiscount(25, true));   // "Premium Discount"
console.log("Age 30, Not Premium:", checkDiscount(30, false)); // "No Discount"




// 3. Login and Email Verification
// javascript


function verifyAccess(isLoggedIn, isEmailVerified) {
    if (isLoggedIn && isEmailVerified) {
        return "Access granted";
    } else if (isLoggedIn) {
        return "Please verify your email";
    } else {
        return "Please log in";
    }

}

// Testing
console.log("Logged in, Verified:", verifyAccess(true, true));   // "Access granted"
console.log("Logged in, Not Verified:", verifyAccess(true, false)); // "Please verify your email"
console.log("Not Logged in:", verifyAccess(false, true));        // "Please log in"





// 4. Contest Eligibility
// javascript
function checkContestEligibility(age, country, isBanned) {
    if (isBanned) {
        return "User is banned";
    } else if (age < 18 || age > 35) {
        return "Age restriction: must be between 18-35";
    } else if (country !== "Pakistan" && country !== "India") {
        return "Region restriction: must be from Pakistan or India";
    } else {
        return "Eligible for contest";
    }
}

// Testing


console.log("Age 25, Pakistan:", checkContestEligibility(25, "Pakistan", false)); // "Eligible"
console.log("Age 16, Pakistan:", checkContestEligibility(16, "Pakistan", false)); // "Age restriction"
console.log("Age 25, USA:", checkContestEligibility(25, "USA", false));           // "Region restriction"
console.log("Age 25, Pakistan, Banned:", checkContestEligibility(25, "Pakistan", true)); // "User is banned"




// 5. Subscription Access Check

function checkSubscriptionAccess(subscriptionPlan, isLoggedIn) {
    if (!isLoggedIn) {
        return "Please log in to continue";
    } else if (subscriptionPlan === "premium") {
        return "Welcome Premium User";
    } else if (subscriptionPlan === "free") {
        return "Welcome Free User";
    } else {
        return "Invalid subscription";
    }
}

// Testing
console.log("Premium, Logged in:", checkSubscriptionAccess("premium", true));  // "Welcome Premium User"
console.log("Free, Logged in:", checkSubscriptionAccess("free", true));        // "Welcome Free User"
console.log("Premium, Not Logged in:", checkSubscriptionAccess("premium", false)); // "Please log in"
console.log("Invalid plan:", checkSubscriptionAccess("basic", true));          // "Invalid subscription"




// 6. Product Purchase Validation



function validatePurchase(price, stock, isMember) {
    if (stock === 0) {
        return "Out of stock";
    } else if (price > 1000 && stock > 0 && isMember) {
        return "Buy now with discount";
    } else if (stock > 0) {
        return "Buy now";
    } else {
        return "Invalid product";
    }
}

// Testing
console.log("Price 1200, Stock 5, Member:", validatePurchase(1200, 5, true));  // "Buy now with discount"
console.log("Price 800, Stock 3, Not Member:", validatePurchase(800, 3, false)); // "Buy now"
console.log("Price 500, Stock 0, Member:", validatePurchase(500, 0, true));    // "Out of stock"
