const lastmod = document.querySelector('#date');
lastmod.textContent = `Last updated: ${document.lastModified}`;

const hamButton = document.querySelector('#ham_menu');
const navigation = document.querySelector('.nav_list');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// banner script//
const today = new Date().getDay();
if (today >= 1 && today <= 3) {
     // Show the banner
    document.getElementById('event-banner').style.display = 'block';
}

function closeBanner() {
    document.getElementById('event-banner').style.display = 'none';
}

//spotlight script//
async function fetchJSONData() {
    try {
        const response = await fetch('https://alevinmol.github.io/wdd230/chamber/data/members.json');
        const jsonData = await response.json();

        if (jsonData && jsonData.members) {
            const silverGoldMembers = jsonData.members.filter(member => member.membership === 'Silver' || member.membership === 'Gold');

            function shuffleArray(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }

            shuffleArray(silverGoldMembers);
            const spotlightList = document.getElementById('spotlight-list');
            for (let i = 0; i < Math.min(3, silverGoldMembers.length); i++) {
                const member = silverGoldMembers[i];
                const listItem = document.createElement('li');
                listItem.textContent = `${member.name} - ${member.membership} Member`;
                spotlightList.appendChild(listItem);
            }
        }
    } catch (error) {
        console.error('Error fetching JSON data:', error);
    }
}

fetchJSONData();