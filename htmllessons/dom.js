console.log("hey");

const body = document.querySelector("body");
const heading = document.querySelector(".heading");
const button = document.querySelector("button");

body.style.backgroundColor = "#1c1b22";
body.style.color = "white";

heading.textContent = "Hello";

button.addEventListener("click", () => {
  heading.style.color = "#60ffca";
});
