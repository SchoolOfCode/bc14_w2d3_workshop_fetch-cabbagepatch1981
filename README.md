# Talking To Servers with Fetch 🐕

🚨 _ALWAYS AWAIT A PROMISE!_ 🚨

### Task 1 - The Fetch Bit

In this task, we will fetch some data from a server. The data we receive will be in JSON format and will contain a quote. We will use fetch to send a GET request to `https://zenquotes.io/api/random/` and will extract the data from the response object. Remember to go step by step, break down each step, and plan before you code.

👉 Write an async function called `getQuote`.

👉 Use fetch to send a GET request to `https://zenquotes.io/api/random/` and store the resolved value of the returned promise in a variable called `response`.

👉 Call the `.json()` method on the response variable to parse the JSON data contained in the response object. Store the resolved value of the returned promise in a variable called `data`.

👉 Use that data to set the text of the `h1` with id `"quote"`.

Hint: You can use `console.log` to have a look at the structure of the data object to figure out how to get just the quote out!

👉 Call this function so that the quote appears as soon as the page loads.

### Task 2 - On Click

Sweet - we're getting a new inspirational quote every time the page is refreshed! Let's make the page more interactive.

👉 Attach an event listener to the button already on the page with id `"new-quote-button"` to call `getQuote` when the user clicks.

Note: As it's a free API, requests are limited to five per 30 second period; if you exceed this, until that timer resets, you'll receive: "Too many requests. Obtain an auth key for unlimited access."

### Task 3 - History

We're now going to display every quote we fetch in a list so that we don't forget our favorites.

👉 Create a function that takes in a string, creates a new list item with that string, and adds it to the `ol` with the id `"quote-history"`.

👉 Call this function within your `getQuote` function so that the quotes get stored in the `"quote-history"` list.

### 🌟 Bonus Task!

What would happen if the API repeated a quote? Let's ensure that that doesn't affect our list of quotes.

👉 Change your code so that if a repeat quote is generated, it will not be added again to the list of previous quotes. This means that your list should not contain any duplicates.

### 🌟 Bonus Bonus Tasks!

👉 Have a quote added to the history list **only** when a new quote is generated so that the same quote is never on the screen in two places.

👉 Look at the [API documentation](https://premium.zenquotes.io/zenquotes-documentation/) to see other ways that you can fetch from the quotes API. Can you implement any additional features using that information?
