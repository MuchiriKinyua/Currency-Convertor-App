const dropList = document.querySelectorAll(".drop-list select");

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
}
