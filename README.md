# CurrencySearch
This project provides a simple web application that allows users to search for countries based on a currency code. It utilizes the Rest Countries API to fetch data about countries and their associated currencies.

How to Use
Clone or download this repository to your local machine.
Open the index.html file in a web browser.
Enter a currency code in the input field provided and click the search button.
The application will display a list of countries that use the specified currency.

Code Overview
index.html: Contains the HTML structure of the web application, including input fields and result display area.
style.css: Provides styles for the layout and appearance of the application.
script.js: Implements the functionality to fetch country data based on the entered currency code and display the results dynamically on the page.

Functionality
The searchCountries function is an asynchronous function that fetches country data based on the entered currency code.
It first retrieves the currency code entered by the user from the input field.
Then, it makes a fetch request to the Rest Countries API to obtain data about countries using the specified currency.
Upon receiving the response, it parses the JSON data and dynamically generates HTML elements to display information about each country.
If no countries are found for the entered currency code, it displays a message indicating so.
In case of any errors during the fetch operation, it displays an error message to the user.

Dependencies
This project relies on the Rest Countries API to fetch country data. No additional dependencies are required to run the application locally.
