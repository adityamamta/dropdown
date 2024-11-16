"use strict"

const button = document.querySelector(".btn");

button.addEventListener("click", ()  => {
    const dropdownList = document.querySelector(".dropdown-list");
    const dropdown = document.querySelector(".dropdown");

    const dropdownHeight = dropdownList.offsetHeight;
    
    if (dropdown.style.height && !(dropdown.style.height === "0px")) {
        dropdown.style.height = "0px";
    } else {
        dropdown.style.height = `${dropdownHeight}px`;
    }
})