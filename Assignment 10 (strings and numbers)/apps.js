// 1. Lowercase Name
javascript
function toLowerCaseName(name) {
    return name.toLowerCase(); // Converts all characters to lowercase
}
// "JOHN" → "john"


// 2. Uppercase Shouting
javascript
function toUpperCaseShouting(str) {
    return str.toUpperCase(); // Converts all characters to uppercase
}
// "hello" → "HELLO"



// 3. Count Characters
javascript
function countCharacters(str) {
    return str.length; // Returns the number of characters in the string
}
// "hello" → 5



// 4. First Character
javascript
function firstCharacter(str) {
    return str.charAt(0); // Gets character at position 0 (first character)
}
// "hello" → "h"


// 5. Last Character
javascript
function lastCharacter(str) {
    return str.charAt(str.length - 1); // Gets character at last position
}
// "hello" → "o"



// 6. Find Position of Word
javascript
function findApplePosition(sentence) {
    return sentence.indexOf("apple"); // Returns index of first occurrence
}
// "I like apple pie" → 7




// 7. Extract First Word
javascript
function extractFirstWord(sentence) {
    const firstSpace = sentence.indexOf(" "); // Find first space
    // If no space, return entire string, else return substring before first space
    return firstSpace === -1 ? sentence : sentence.slice(0, firstSpace);
}


// "Hello world" → "Hello"




// 8. Replace a Word
javascript
function replaceBadWithGood(sentence) {
    return sentence.replace("bad", "good"); // Replaces first occurrence only
}
// "This is bad" → "This is good"


// 9. Replace All Vowels
javascript
function replaceAllVowels(str) {
    return str.replaceAll(/[aeiouAEIOU]/g, "*"); // Regex for all vowels, 'g' flag for global
}
// "Hello World" → "H*ll* W*rld"






// 10. Split Sentence into Words
javascript
function splitSentenceIntoWords(sentence) {
    return sentence.split(" "); // Splits at each space into array
}
// "Hello world" → ["Hello", "world"]



// Intermediate Operations (11-20)


// 11. Capitalize First Letter
javascript
function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    // First char uppercase + rest lowercase
}
// "hello" → "Hello"




// 12. Find Second Word
javascript
function findSecondWord(sentence) {
    const words = sentence.split(" "); // Split into array
    return words.length >= 2 ? words[1] : ""; // Return second word if exists
}
// "Hello world" → "world"






// 30. Find Longest Word
javascript
function findLongestWord(sentence) {
    const words = sentence.split(" ");
    return words.reduce((longest, current) => 
        current.length > longest.length ? current : longest
    , "");
}

// Uses reduce to find word with maximum length




// Complex Operations (31-40)




