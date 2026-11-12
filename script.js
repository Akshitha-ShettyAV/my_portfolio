
// Display current date on Bio-data page

let today = new Date();

let date = today.toLocaleDateString("en-IN");

let dateElement = document.getElementById("date");

if (dateElement) {
    dateElement.innerHTML = date;
}

// Welcome message in console

console.log("Welcome to My Resume Website!");
