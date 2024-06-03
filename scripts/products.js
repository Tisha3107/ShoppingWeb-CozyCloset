//script.js
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navItems.forEach((navItem) => navItem.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

function myFunction() {
  window.location.href = "cart.html";
}

const button1 = document.getElementById("btn-1");
const originalColor = window.getComputedStyle(button1).backgroundColor;
const originalText = button1.textContent;
const newColor = "green";
const newText = "Added To Bag";

// Add a click event listener to the button
button1.addEventListener("click", () => {
  // Toggle the background color and text
  if (button1.style.backgroundColor === newColor) {
    button1.style.backgroundColor = originalColor;
    button1.textContent = originalText;
  } else {
    button1.style.backgroundColor = newColor;
    button1.textContent = newText;
  }
});

const button2 = document.getElementById("btn-2");
const originalColor2 = window.getComputedStyle(button2).backgroundColor;
const originalText2 = button2.textContent;

button2.addEventListener("click", () => {
  // Toggle the background color and text
  if (button2.style.backgroundColor === newColor) {
    button2.style.backgroundColor = originalColor2;
    button2.textContent = originalText2;
  } else {
    button2.style.backgroundColor = newColor;
    button2.textContent = newText;
  }
});

const button3 = document.getElementById("btn-3");
const originalColor3 = window.getComputedStyle(button3).backgroundColor;
const originalText3 = button3.textContent;

button3.addEventListener("click", () => {
  // Toggle the background color and text
  if (button3.style.backgroundColor === newColor) {
    button3.style.backgroundColor = originalColor3;
    button3.textContent = originalText3;
  } else {
    button3.style.backgroundColor = newColor;
    button3.textContent = newText;
  }
});

const button4 = document.getElementById("btn-4");
const originalColor4 = window.getComputedStyle(button4).backgroundColor;
const originalText4 = button4.textContent;

button4.addEventListener("click", () => {
  if (button4.style.backgroundColor === newColor) {
    button4.style.backgroundColor = originalColor4;
    button4.textContent = originalText4;
  } else {
    button4.style.backgroundColor = newColor;
    button4.textContent = newText;
  }
});

const button5 = document.getElementById("btn-5");
const originalColor5 = window.getComputedStyle(button5).backgroundColor;
const originalText5 = button5.textContent;

button5.addEventListener("click", () => {
  if (button5.style.backgroundColor === newColor) {
    button5.style.backgroundColor = originalColor5;
    button5.textContent = originalText5;
  } else {
    button5.style.backgroundColor = newColor;
    button5.textContent = newText;
  }
});

const button6 = document.getElementById("btn-6");
const originalColor6 = window.getComputedStyle(button6).backgroundColor;
const originalText6 = button6.textContent;

button6.addEventListener("click", () => {
  if (button6.style.backgroundColor === newColor) {
    button6.style.backgroundColor = originalColor6;
    button6.textContent = originalText6;
  } else {
    button6.style.backgroundColor = newColor;
    button6.textContent = newText;
  }
});
