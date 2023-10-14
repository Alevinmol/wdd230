//declare variables and get date information
const d = new Date();
const year = d.getFullYear();

// using getElementById
document.querySelector("#currentyear").textContent = year;
document.getElementById("lastupdated").textContent = `Last Updated: ${document.lastModified}`;
