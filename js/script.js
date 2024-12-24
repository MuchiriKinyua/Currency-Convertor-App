const dropList = document.querySelectorAll(".drop-list select"),
fromCurrency = document.querySelector(".from select"),
toCurrency = document.querySelector(".to select"),
getButton = document.querySelector("form button");

// Iterate through each dropdown
for (let i = 0; i < dropList.length; i++) {
    // Iterate through each currency in the country_list   
    for (let currency_code in country_list) {
        let selected;
        // Set the default selected currency for the "From" and "To" dropdowns
        if (i === 0) {
            selected = currency_code === "USD" ? "selected" : "";
        } else if (i === 1) {
            selected = currency_code === "KES" ? "selected" : "";
        }

        // Add the option to the dropdown
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[i].addEventListener("change", e=>{
        loadFlag(e.target);
    });
}
function loadFlag(element) {
    const selectedCode = element.value; // Get the selected currency code
    if (country_list[selectedCode]) {
        // Update the flag image
        let imgTag = element.parentElement.querySelector("img");
        imgTag.src = `https://flagcdn.com/w40/${country_list[selectedCode].toLowerCase()}.png`;
    }
}
window.addEventListener("load", () => {
    getExchangeRate();
});
getButton.addEventListener("click", e => {
    e.preventDefault();
    getExchangeRate();
});
function getExchangeRate(){
    const amount = document.querySelector(".amount input");
    exchangeRateTxt = document.querySelector(".exchange-rate");
    let amountVal = amount.value;
    if(amountVal == "" || amountVal == "0"){
        amount.val = "1";
        amountVal = 1;
    }
    exchangeRateTxt.innerText = "Getting exchange rate...";
    let url = `https://v6.exchangerate-api.com/v6/5109cb7ac4605f10342fa09e/latest/${fromCurrency.value}`;
    fetch(url).then(response => response.json()).then(result => {
        let exchangeRate = result.conversion_rates[toCurrency.value];
        let totalExchangeRate = (amountVal * exchangeRate).toFixed(2);
        exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`;
    })
}