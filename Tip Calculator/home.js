function totalTip() {
    let billAmountInputValue = document.getElementById('billAmont').value;
    let percentageTipInputValue = document.getElementById('percentageTip').value;
    let errorMessageElement = document.getElementById('errorMessage');
    let errorMessage = "Please fill in all the * fields.";

    // Clear previous error messages
    errorMessageElement.textContent = "";

    // Check if the inputs are empty
    if (billAmountInputValue === "") {
        errorMessageElement.textContent = errorMessage;
    } else if (percentageTipInputValue === "") {
        errorMessageElement.textContent = errorMessage;
    } else {
        let billAmount = parseFloat(billAmountInputValue);
        let percentageTip = parseFloat(percentageTipInputValue);

        // Check if the inputs are valid numbers
        if (isNaN(billAmount) || isNaN(percentageTip)) {
            errorMessageElement.textContent = "Please enter valid numbers.";
        } else {
            // Calculate the tip and total amount
            let calculatedTip = (percentageTip / 100) * billAmount;
            let totalAmount = billAmount + calculatedTip;

            // Set the calculated values to the respective fields
            document.getElementById("tipAmont").value = Math.round(calculatedTip);
            document.getElementById("totalAmont").value = Math.round(totalAmount);
        }
    }
}
