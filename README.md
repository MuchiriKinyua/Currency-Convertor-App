# Currency Convertor App </br>

![Screenshot from 2024-12-24 16-16-49](https://github.com/user-attachments/assets/794a0508-4783-4984-9211-37d0bfc5cc19) </br>

This is a simple Currency Converter web application that allows users to convert amounts between different currencies. The app uses ExchangeRate API to fetch live conversion rates and displays the equivalent value for the selected currencies.
# Features

    Live Exchange Rates:
        Fetches real-time currency conversion rates from the API.
    Currency Selection:
        Dropdown menus with country flags for an intuitive selection experience.
    Responsive Design:
        Styled using CSS and compatible with devices of varying screen sizes.
    Swap Functionality:
        Allows quick swapping between "From" and "To" currencies.
    Error Handling:
        Displays a fallback message if the API request fails.

# Installation and Setup

    Clone the Repository:

git clone https://github.com/MuchiriKinyua/Currency-Convertor-App
cd <repository-folder>

# Add API Key:

    Replace <API_KEY> in the script with your ExchangeRate API key:

        let url = `https://v6.exchangerate-api.com/v6/<API_KEY>/latest/${fromCurrency.value}`;

    Serve Files:
        Open index.html in a browser or use a local server (e.g., Live Server in VS Code).

# Folder Structure

/currency-converter </br>
├── index.html         # Main HTML file </br>
├── style.css          # Styles for the application </br>
├── script.js          # JavaScript for functionality </br>
├── country-list.js    # Country codes and flags </br>
└── assets/            # Folder for images (if applicable)

# Usage Instructions

    Select Amount:
        Enter the amount to be converted.
    Choose Currencies:
        Use the dropdowns to select the currencies.
    View Results:
        Click "Get Exchange Rate" to display the converted amount.
    Swap Currencies:
        Use the swap icon to reverse "From" and "To" currencies.

# Dependencies

    Font Awesome: For icons.
    Flag Icon CSS: For country flags.
    ExchangeRate API: For fetching real-time rates.

# Screenshots

    Home Page:
    Converted Output:

# Future Improvements

    Add additional APIs for enhanced rate reliability.
    Include a dark mode toggle.
    Save recent conversions in local storage.
