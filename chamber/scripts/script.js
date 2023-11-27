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
    // Close the banner when the close button is clicked
    document.getElementById('event-banner').style.display = 'none';
}