const hamButton = document.querySelector('#ham_menu');
const navigation = document.querySelector('.nav_list');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});