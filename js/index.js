//const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
//document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-Us', options);

const lastmod = document.querySelector('#currentdate');
lastmod.textContent = `Last updated: ${document.lastModified}`;