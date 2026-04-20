// Select elements
const button = document.getElementById("btn");
const text = document.getElementById("text");
const inputBox = document.getElementById("inputBox");
const output = document.getElementById("output");
const heading = document.getElementById("heading");


// 1. Click event
button.addEventListener("click", function () {
    text.textContent = "Button was clicked!";
});


// 2. Mouse over event
button.addEventListener("mouseover", function () {
    button.style.backgroundColor = "lightgreen";
});


// 3. Mouse out event
button.addEventListener("mouseout", function () {
    button.style.backgroundColor = "";
});


// 4. Input event
inputBox.addEventListener("input", function (event) {
    output.textContent = "You typed: " + event.target.value;
});


// 5. Double click event
heading.addEventListener("dblclick", function () {
    heading.textContent = "You double-clicked me!";
});