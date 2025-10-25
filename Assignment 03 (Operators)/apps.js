// Let's evaluate each expression step by step
console.log("=== Evaluating Logical Expressions ===");

// Expression 1
console.log("1. 15 !== 15 && 8 * 2 !== 20 || 'hello' === 'world' && 10 > 15 || 6 === '6'");
console.log("Step 1: 15 !== 15 →", 15 !== 15); // false
console.log("Step 2: 8 * 2 !== 20 →", 8 * 2 !== 20); // 16 !== 20 → true
console.log("Step 3: false && true →", false && true); // false
console.log("Step 4: 'hello' === 'world' →", 'hello' === 'world'); // false
console.log("Step 5: 10 > 15 →", 10 > 15); // false
console.log("Step 6: false && false →", false && false); // false
console.log("Step 7: 6 === '6' →", 6 === '6'); // false
console.log("Step 8: false || false || false →", false || false || false); // false
console.log("Result:", 15 !== 15 && 8 * 2 !== 20 || 'hello' === 'world' && 10 > 15 || 6 === '6');
console.log("---");

// Expression 2
console.log("2. 9 > 8 && 3 + 7 === 11 || 4 !== '4' && 10 - 2 === 8 || 5 * 3 === 15");
console.log("Step 1: 9 > 8 →", 9 > 8); // true
console.log("Step 2: 3 + 7 === 11 →", 3 + 7 === 11); // 10 === 11 → false
console.log("Step 3: true && false →", true && false); // false
console.log("Step 4: 4 !== '4' →", 4 !== '4'); // true (different types)
console.log("Step 5: 10 - 2 === 8 →", 10 - 2 === 8); // true
console.log("Step 6: true && true →", true && true); // true
console.log("Step 7: 5 * 3 === 15 →", 5 * 3 === 15); // true
console.log("Step 8: false || true || true →", false || true || true); // true
console.log("Result:", 9 > 8 && 3 + 7 === 11 || 4 !== '4' && 10 - 2 === 8 || 5 * 3 === 15);
console.log("---");

// Expression 3
console.log("3. 0 === false && 7 * 2 === 14 || 'True' === true && 5 !== '5' || 6 + 6 === 12");
console.log("Step 1: 0 === false →", 0 === false); // false (different types)
console.log("Step 2: 7 * 2 === 14 →", 7 * 2 === 14); // true
console.log("Step 3: false && true →", false && true); // false
console.log("Step 4: 'True' === true →", 'True' === true); // false
console.log("Step 5: 5 !== '5' →", 5 !== '5'); // true
console.log("Step 6: false && true →", false && true); // false
console.log("Step 7: 6 + 6 === 12 →", 6 + 6 === 12); // true
console.log("Step 8: false || false || true →", false || false || true); // true
console.log("Result:", 0 === false && 7 * 2 === 14 || 'True' === true && 5 !== '5' || 6 + 6 === 12);
console.log("---");

// Expression 4
console.log("4. 'a' !== 'A' && 3 * 3 === 9 || 4 < 4 && 10 / 2 === 5 || 8 === '8'");
console.log("Step 1: 'a' !== 'A' →", 'a' !== 'A'); // true
console.log("Step 2: 3 * 3 === 9 →", 3 * 3 === 9); // true
console.log("Step 3: true && true →", true && true); // true
console.log("Step 4: 4 < 4 →", 4 < 4); // false
console.log("Step 5: 10 / 2 === 5 →", 10 / 2 === 5); // true
console.log("Step 6: false && true →", false && true); // false
console.log("Step 7: 8 === '8' →", 8 === '8'); // false
console.log("Step 8: true || false || false →", true || false || false); // true
console.log("Result:", 'a' !== 'A' && 3 * 3 === 9 || 4 < 4 && 10 / 2 === 5 || 8 === '8');
console.log("---");

// Expression 5
console.log("5. 100 / 10 === 10 && 7 === 7 || 3 * 2 !== 7 && 'hello' === 'hello' || 9 > 12");
console.log("Step 1: 100 / 10 === 10 →", 100 / 10 === 10); // true
console.log("Step 2: 7 === 7 →", 7 === 7); // true
console.log("Step 3: true && true →", true && true); // true
console.log("Step 4: 3 * 2 !== 7 →", 3 * 2 !== 7); // 6 !== 7 → true
console.log("Step 5: 'hello' === 'hello' →", 'hello' === 'hello'); // true
console.log("Step 6: true && true →", true && true); // true
console.log("Step 7: 9 > 12 →", 9 > 12); // false
console.log("Step 8: true || true || false →", true || true || false); // true
console.log("Result:", 100 / 10 === 10 && 7 === 7 || 3 * 2 !== 7 && 'hello' === 'hello' || 9 > 12);
console.log("---");

// Let me create a function to evaluate all expressions more efficiently
function evaluateExpression(expr, number) {
    const result = eval(expr);
    console.log(`${number}. ${expr}`);
    console.log(`Result: ${result}`);
    console.log("---");
    return result;
}

// Evaluate all expressions
console.log("=== Evaluating All Expressions ===");

evaluateExpression("15 !== 15 && 8 * 2 !== 20 || 'hello' === 'world' && 10 > 15 || 6 === '6'", 1);
evaluateExpression("9 > 8 && 3 + 7 === 11 || 4 !== '4' && 10 - 2 === 8 || 5 * 3 === 15", 2);
evaluateExpression("0 === false && 7 * 2 === 14 || 'True' === true && 5 !== '5' || 6 + 6 === 12", 3);
evaluateExpression("'a' !== 'A' && 3 * 3 === 9 || 4 < 4 && 10 / 2 === 5 || 8 === '8'", 4);
evaluateExpression("100 / 10 === 10 && 7 === 7 || 3 * 2 !== 7 && 'hello' === 'hello' || 9 > 12", 5);
evaluateExpression("20 / 4 === 5 && 3 + 5 === 8 || 8 === 8 && 'yes' !== 'YES' || 12 === '12'", 6);
evaluateExpression("6 > 5 && 4 * 2 !== 10 || 7 === 6 + 1 && 'no' === 'yes' || 100 !== 100", 7);
evaluateExpression("5 === '5' || 8 / 2 !== 5 && 4 + 6 === 11 || 9 === 8 + 1 && 'abc' !== 'ABC'", 8);
evaluateExpression("true && false || 4 * 2 === 8 && 'hello' === 'hello' || 5 !== '5' && 3 < 5", 9);
evaluateExpression("false && true || 'red' === 'blue' && 5 + 5 === 10 || 6 === '6' && 9 > 8", 10);
evaluateExpression("'dog' === 'dog' && 3 * 3 === 9 || false && 5 === 5 || 7 === '7'", 11);
evaluateExpression("true || false && 4 * 4 === 16 || 'cat' !== 'dog' && 3 < 5 || 10 / 2 === 5", 12);
evaluateExpression("false && true || 5 * 3 === 15 || 6 > 8 && 7 + 1 === 8 || 'test' === 'test'", 13);
evaluateExpression("true && false || 8 / 2 === 4 && 3 + 2 === 5 || 9 !== 9 && 'green' === 'green'", 14);
evaluateExpression("false && 5 > 10 || 7 === '7' && 4 * 5 === 20 || true && false", 15);
evaluateExpression("true && 'hello' === 'hello' || 9 * 2 === 18 && 6 + 2 === 8 || false && 7 > 3", 16);
evaluateExpression("'apple' === 'apple' && 2 + 3 === 5 || false && true || 10 - 5 === 5 || 5 === '5'", 17);
evaluateExpression("'apple' === 'apple' && 3 + 4 === 7 || 6 * 2 !== 12 && 10 - 5 === 5 || 'Java' !== 'java'", 18);
evaluateExpression("15 * 2 !== 30 && 5 === 5 || 'cat' === 'dog' && 7 / 2 === 3.5 || 20 > 10", 19);
evaluateExpression("8 * 3 === 24 && 100 / 10 === 10 || 'red' !== 'green' && 9 + 1 === 10 || 5 === 5", 20);

// Final summary
console.log("=== FINAL RESULTS SUMMARY ===");
const results = [
    false,  // 1
    true,   // 2
    true,   // 3
    true,   // 4
    true,   // 5
    true,   // 6
    true,   // 7
    true,   // 8
    true,   // 9
    false,  // 10
    true,   // 11
    true,   // 12
    true,   // 13
    true,   // 14
    false,  // 15
    true,   // 16
    true,   // 17
    true,   // 18
    true,   // 19
    true    // 20
];

