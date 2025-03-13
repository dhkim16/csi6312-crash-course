"use strict"

window.onload = init;

var counter = 1;

function init() {
    const itemList = document.getElementById("item-list");

    // Add a default item (0) to the list
    const defaultItem = document.createElement("li");
    defaultItem.classList.add("number-item");
    defaultItem.textContent = "0";
    itemList.appendChild(defaultItem);
}

function addItem() {
    // Get the list where the items will be added
    const itemList = document.getElementById("item-list");
    
    // Create a new item
    const newItem = document.createElement("li");
    newItem.id = `item-${counter}`;
    newItem.classList.add("number-item");
    newItem.textContent = counter;

    // Increment the counter
    counter += 1;

    // Add a delete button to the item. It will remove the item when clicked.
    const itemDeleteButton = document.createElement("button");
    itemDeleteButton.textContent = "Delete";
    itemDeleteButton.onclick = function() {
        newItem.remove(); // Looks for newItem within the scope and will find the one just outside the function definition.
    }

    // Add the delete button to the item
    newItem.appendChild(itemDeleteButton);

    // Add the new item to the list
    itemList.appendChild(newItem);
}

function deleteItem2() {
    newItem.remove(); // Doesn't work! (newItem not in scope)
}

function changeColor() {
    const itemList = document.getElementById("item-list");
    const items = itemList.getElementsByClassName("number-item");
    for (let i = 0; i < items.length; i++) {
        items[i].classList.toggle("colored");
    }
}

