const baseURL = "https://alevinmol.github.io/wdd230/";
const linksURL = "https://alevinmol.github.io/wdd230/data/links.json";
const items = document.querySelector('#items');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }
  
getLinks();

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
      // Create elements to add to the div.items element
      let item = document.createElement('li');
      let anchor = document.createElement('a');

      let fullName = document.createElement('h2'); // fill in the blank
      let portrait = document.createElement('img');
      let dateOfBirth = document.createElement('p');
      let placeOfBirth = document.createElement('p');

        
      // Build the h2 content out to show the prophet's full name

      item.textContent = `Lesson: ${week.lesson}`;
      anchor.setAttribute('href', week.links[0]);
      anchor.textContent = ``
      fullName.textContent = `${prophet.name} ${prophet.lastname}`; // fill in the blank
      // Build the image portrait by setting all the relevant attributes
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
      dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
      placeOfBirth.textContent = `Place of birth: ${prophet.birthplace}`;
  
      // Append the section(card) with the created elements
      card.appendChild(fullName); //fill in the blank
      card.appendChild(dateOfBirth);
      card.appendChild(placeOfBirth);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }); // end of arrow function and forEach loop
}

