

var html = document.querySelector("html");
var button = document.querySelector("#theme-toggle");

var theme = localStorage.getItem("theme");
if (theme) {
    html.setAttribute("data-theme", theme);
}

button.addEventListener("click", function () {
var otherTheme = html.getAttribute("data-theme");
var newTheme = otherTheme === "light" ? "dark" : "light";
html.setAttribute("data-theme", newTheme);
localStorage.setItem("theme", newTheme);
});