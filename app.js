// Write an async function getQuote 🍎 
// Use fetch to send a GET request to `https://zenquotes.io/api/random/` and (https://meowfacts.herokuapp.com/)
// store the resolved value of the returned promise in a variable called `response`. 🍎 
// Call the `.json()` method on the response variable to parse the JSON data contained in the response object. 🍎 
// Store the resolved value of the returned promise in a variable called `data`. 🍎 
// Use that data to set the text of the `h1` with id `"quote"`. 🍎 
// Hint: You can use `console.log` to have a look at the structure of the data object to figure out how to get just the quote out! 🍎 


// TASK ONE - TRYING TO GET THE QUOTE CALLED 🍎
async function getQuote() {
const response = await fetch("https://meowfacts.herokuapp.com/");
console.log(response);
// Call .json() method on translate the JSON data contained in the response to data variable 
const data = await response.json();
//console.log(data);
// .json parses the data contained the in response variable
const quoteText = data.data[0];
//console.log(quoteText);
const quoteElement = document.getElementById("quote");
quoteElement.textContent = quoteText;
console.log(quoteElement);
// await for both fetch and response
if(!list.includes(quoteText)) {
    list.push(quoteText);
    addQuote(quoteText);
}
console.log(list);
}
//calling the function 
getQuote(); 

// TASK TWO - ADDING AN EVENT LISTENER 🍎
// On Click 🍎
// Making the page more interactive. 🍎
// Attach an event listener to the button with id `"new-quote-button"` to call `getQuote` when the user clicks. 🍎

document.getElementById("new-quote-button").addEventListener("click", getQuote);

// TASK THREE - Display fetched quotes in a list 🍎
// Create a function that takes in a string 🍎
// Create a new list item with that string 🍎
// Add it to the ordered list / `ol` with the id `"quote-history"` 🍎
// Call this function within your `getQuote` function so that the quotes get stored in the `"quote-history"` list. 🍎

const list = [];
// Declare variable list and assign an empty array to it.  This will store multiple values in the one variable
function addQuote(string) {
// Definte function addQuote and pass in string as a parameter. This function will be used to add a new quote to the HTML element with the id of "quote-history"
    const quotes = document.getElementById("quote-history");
// Declare variable quotes and assign it to the result of the document.getElementbyId("quote-history") which finds and returns the HTML element with the id of "quote-history"
    quotes.insertAdjacentHTML("beforeend", `<li>${string}</li>`);
// Call the insertAdjacentHTML method on the quotes variable (the HTML element with the id of "quote-history").  insertAdjacentHTML takes two arguments: a position and a string containing the HTML to be inserted.
// The first argument is the position.  Beforehand  specifies to insert the new HTML. It indicates that the new HTNL should be inserted just before the end tag of the "quotes" element.
// The second argument is the string containing the HTML to be inserted, "<li>${string}</li>".  This is a template literal that creates a new list item with the content of the string parameter passed into the function.  The "${string}" syntax inside the template literal is used to embed to value of the string parameter passed into the function within the list item.
}

