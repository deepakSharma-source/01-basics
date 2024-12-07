/**
 * Task 10: Create a Band Name Generator
 */

// 1. Declare a function named generateBandName that takes two arguments: clothingColor and lastFoodEaten.
// 2. In the function, declare a variable named bandName and assign it to an initial value of an empty string.
// 3. Using string concatenation, assign bandName to the string "The " plus the clothingColor and lastFoodEaten variables.
// 4. Ensure the first letter of each word is capitalized.
// 5. Return the bandName variable.

function generateBandName(clothingColor, lastFoodEaten) {
  // Your code here
  let bandName = "";
  // Initialize bandName to an empty string
  // Function to capitalize the first letter of each word
  function capitalizedFirstLetter(word) {
   if(typeof word === "number") {
    return word.toString();
   }
   if(typeof word !== "string" || word === null) {
    return "";
   }
   return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  // Construct the band name
  bandName = "The " +
  capitalizedFirstLetter(clothingColor) +
  " " +
  capitalizedFirstLetter(lastFoodEaten);
  return bandName;
}
