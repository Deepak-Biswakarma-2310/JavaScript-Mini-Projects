document.body.style.backgroundColor = "#0f172a";

let bgContainer = document.createElement("div");
bgContainer.classList.add("bg-container");
document.body.appendChild(bgContainer);

let heading = document.createElement("h1");
heading.textContent = "Grocery List";
heading.classList.add("Heading");
bgContainer.appendChild(heading);

let groceryListContainer = document.createElement("div");
groceryListContainer.classList.add("grocery-list-container");
bgContainer.appendChild(groceryListContainer);

let groceryLists = document.createElement("ul");
groceryListContainer.appendChild(groceryLists);

let itemList = ["Milk", "Peanut Butter", "Choco Chips", "Tomato Sauce", "Cup Cakes", "Noodles"];

for (let i=0; i<itemList.length; i++) {
    let groceryList = document.createElement("li");
    groceryList.textContent = itemList[i];
    groceryList.style.fontWeight = "600";
    groceryListContainer.appendChild(groceryList);
}

let homeDeliveryContainer = document.createElement("div");
homeDeliveryContainer.classList.add("home-delivery-container");
bgContainer.appendChild(homeDeliveryContainer);

let checkBox = document.createElement("input");
checkBox.type = "checkbox";
checkBox.id = "homeDeliveryCheckbox";
checkBox.classList.add("home-delivery-checkbox");
homeDeliveryContainer.appendChild(checkBox);

let checkBoxLabel = document.createElement("label");
checkBoxLabel.htmlFor = "homeDeliveryCheckbox";
checkBoxLabel.innerText = "Need Home Delivery";
checkBoxLabel.classList.add("home-delivery-text")
homeDeliveryContainer.appendChild(checkBoxLabel);

let paymentButton = document.createElement("button");
paymentButton.textContent = "Proceed To Pay";
paymentButton.classList.add("payment-button");
bgContainer.appendChild(paymentButton);