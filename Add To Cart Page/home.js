let itemList = [
    {
        name: "Apple",
        uniqueNo: 1
    },
    {
        name: "Banana",
        uniqueNo: 2
    }
]

let itemCount = itemList.length;

function inputText() {
    let input = inputElement.value;
    if(input === "") {
        alert("Please enter a value");
        return;
    } else {
        itemCount += 1;
        let newItem = {
            name: input,
            uniqueNo: itemCount
        }
        createList(newItem);
        inputElement.value = "";
    }
}

function onDeleteBtn(listId) {
    let itemToDelete = document.getElementById(listId);
    myCartItems.removeChild(itemToDelete);
}

let bgContainer = document.createElement("div");
bgContainer.classList.add("bg-container");
document.body.appendChild(bgContainer);

let heading = document.createElement("h1");
heading.textContent = "Add To Cart";
heading.classList.add("title");
bgContainer.appendChild(heading);

let inputContainer = document.createElement("div");
inputContainer.classList.add("addToCart-input-container");
bgContainer.appendChild(inputContainer);

let inputElement = document.createElement("input");
inputElement.classList.add("addTOCart-input");
inputContainer.appendChild(inputElement);

let addButton = document.createElement("button");
addButton.textContent = "Add";
addButton.classList.add("add-button");
addButton.onclick = function() {
    inputText();
}
inputContainer.appendChild(addButton);

let cartItemsContainer = document.createElement("div");
cartItemsContainer.classList.add("cart-items-container");
bgContainer.appendChild(cartItemsContainer);

let myCartItemsHeading = document.createElement("h3");
myCartItemsHeading.textContent = "My Cart Items";
myCartItemsHeading.classList.add("myCart-Items-Heading");
cartItemsContainer.appendChild(myCartItemsHeading);

let myCartItems = document.createElement("ul");
myCartItems.classList.add("myCart-Items");
cartItemsContainer.appendChild(myCartItems);

function createList(list){

    let listId = itemList.uniqueNo;

    let myCartItem = document.createElement("li");
    myCartItem.textContent = list.name;
    myCartItem.id = listId;
    myCartItem.classList.add("my-cart-item");
    myCartItems.appendChild(myCartItem);

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("material-symbols-outlined");
    deleteBtn.onclick = function() {
        onDeleteBtn(listId);
    }
    myCartItem.appendChild(deleteBtn);
}

for (let item of itemList){
    createList(item);
}