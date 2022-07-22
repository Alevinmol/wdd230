const requestURL = "json/temples.json"
const spotlight = document.querySelector(".spotlight")

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const temples = jsonObject['temples'];
        const temple = temples[Math.floor(Math.random() * temples.length)];

        //img Temple photo
        let image = document.createElement('img');
        image.src = temple.imgfile;
        image.setAttribute('alt', temple.name);
        spotlight.appendChild(image);

        //h4 Name
        let head = document.createElement('h4');
        head.textContent = temple.name;
        spotlight.appendChild(head);

        //p Summary
        let par = document.createElement('p');
        par.textContent = temple.summary;
        spotlight.appendChild(par);
    });