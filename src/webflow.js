
const clothingColor = document.querySelector("#clothing-color");
const food = document.querySelector("#food");
const bandNameText = document.querySelector("#band-name-text");
const form = document.querySelector("#band-name-form");


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

  form.addEventListener("submit", function(e) { 
    e.preventDefault();
    e.stopPropagation();
    const bandName = generateBandName(clothingColor.value, food.value);
    console.log(bandName);
    bandNameText.textContent = bandName;
  });
  