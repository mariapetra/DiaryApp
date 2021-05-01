'use strict';

const entryForm = document.getElementById("entryForm");
const entriesSection = document.getElementById("entries");
const entryTextbox = document.getElementsByClassName("entry-textbox");



function addEntryToDom(event) {
    event.preventDefault();
    console.log(entryTextbox[0].value)
    const entryDiv = document.createElement("div")
}

entryForm.addEventListener("submit", addEntryToDom)   

