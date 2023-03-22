// Write an async function getQuote 🍎 
// Use fetch to send a GET request to `https://zenquotes.io/api/random/` and (https://meowfacts.herokuapp.com/)
// store the resolved value of the returned promise in a variable called `response`. 🍎 
// Call the `.json()` method on the response variable to parse the JSON data contained in the response object. 🍎 
// Store the resolved value of the returned promise in a variable called `data`.
// Use that data to set the text of the `h1` with id `"quote"`.
// Hint: You can use `console.log` to have a look at the structure of the data object to figure out how to get just the quote out!


// TASK ONE - TRYING TO GET THE QUOTE CALLED
async function getQuote() {
const response = await fetch("https://meowfacts.herokuapp.com/");
console.log(response);
// Call .json() method on translate the JSON data contained in the response to data variable 
const data = await response.json();
console.log(data);
// .json parses the data contained the in response variable
const quoteText = data.data[0];
console.log(quoteText);
const quoteElement = document.getElementById("quote");
quoteElement.textContent = quoteText;
console.log(quoteElement);
// await for both fetch and response
}
//calling the function 
getQuote();





