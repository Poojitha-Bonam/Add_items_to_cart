// let inputele=document.getElementById("input_ele")
// let text_area_ele=document.getElementById("text_area_ele")
// text_area_ele.value = localStorage.getItem("items")
// console.log(inputele.value)
// function addYourItems(){
//     // console.log(inputele.value)
//     console.log(event.key)
//     if (event.key =="Enter"){
//     text_area_ele.value=text_area_ele.value+" "+inputele.value
//     localStorage.setItem("items",text_area_ele.value)
//     inputele.value=""    
//     }  
// }
// // event for keydown
// inputele.addEventListener("keydown",addYourItems)

// // event for keyup
// inputele.addEventListener("keyup",addYourItems)

// Getting elements
const inputEle = document.getElementById("input_ele");
const textAreaEle = document.getElementById("text_area_ele");
const storeBtn = document.getElementById("store_btn");
const clearBtn = document.getElementById("clear_btn");

// Load saved items from localStorage on page load
textAreaEle.value = localStorage.getItem("items");

// Function to add item
function addYourItems() {
  const item = inputEle.value.trim();

  if (item === "") {
    alert("⚠️ Please enter an item!");
    return;
  }

  // Append new item
  textAreaEle.value += (textAreaEle.value ? "\n" : "") + item;

  // Save to localStorage
  localStorage.setItem("items", textAreaEle.value);

  // Clear input field
  inputEle.value = "";
}

// Add item on button click
storeBtn.addEventListener("click", addYourItems);

// Add item on pressing Enter
inputEle.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addYourItems();
  }
});

// Clear all items
clearBtn.addEventListener("click", () => {
  const confirmClear = confirm("Are you sure you want to clear all items?");
  if (confirmClear) {
    textAreaEle.value = "";
    localStorage.removeItem("items");
  }
});
