const url = 'https://alevinmol.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');
async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets); // temporary testing of data retreival
    displayMembers(data.members);
}
  
  getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let businessName = document.createElement('h3'); 
      let image = document.createElement('img');
      let address = document.createElement('p');
      let website = document.createElement('p');
      let phoneNumber = document.createElement('p');
      let membershipLevel = document.createElement('p');
      
      // Build the h2 content out to show the prophet's full name
      businessName.textContent = `${member.name}`; 
      // Build the image portrait by setting all the relevant attributes
      image.setAttribute('src', member.imageurl);
      image.setAttribute('alt', `Image of ${member.name}`); // fill in the blank
      image.setAttribute('loading', 'lazy');
      image.setAttribute('width', '300');
      image.setAttribute('height', '300');
      address.textContent = `Address: ${member.address}`;
      website.textContent = `Website: ${member.website}`;
      phoneNumber.textContent = `Phone number: ${member.phone}`;
      membershipLevel.textContent = `Membership Level: ${member.membership}`;
  
      // Append the section(card) with the created elements
      card.appendChild(businessName); 
      card.appendChild(address);
      card.appendChild(website);
      card.appendChild(phoneNumber);
      card.appendChild(membershipLevel);
      card.appendChild(image);
  
      cards.appendChild(card);
    }); // end of arrow function and forEach loop
}

const gridbutton = document.querySelector("#directoryGrid");
const listbutton = document.querySelector("#directoryList");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}