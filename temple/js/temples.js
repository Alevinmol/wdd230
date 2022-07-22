const requestURL = "json/temples.json"
const cards = document.querySelector('div.deck');


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const temples = jsonObject['temples'];
        temples.forEach(displayTemples);
    });

function displayTemples(temple) {
  let card = document.createElement('section');

  //img
  let image = document.createElement('img');
  image.src = temple.imgfile;
  image.setAttribute('alt', temple.name);
  card.appendChild(image);

  //button like
  let likebtn = document.createElement('button');
  const likeImg = document.createElement('img');
  likeImg.setAttribute('alt', 'like button image');

  likebtn.appendChild(likeImg);
  if(localStorage.getItem(temple.name) == "true") {
    likeImg.src = "images/heart_full.svg";
    }
    else {
        likeImg.src = "images/heart_empty.svg";
    }

  likebtn.setAttribute('id', 'like');
  likebtn.setAttribute('value', "like-btn");
  likebtn.addEventListener("click", () => {
        if(localStorage.getItem(temple.name) == "true") {
          localStorage.setItem(temple.name, "false");
          likeImg.src = "images/heart_empty.svg";
      }
      else {
          localStorage.setItem(temple.name, "true");
          likeImg.src = "images/heart_full.svg";
      }
  });
  card.append(likebtn);


  //h2 name
  let h2 = document.createElement('h2');
  h2.textContent = temple.name;
  card.appendChild(h2);

  //p address
  let p1 = document.createElement('p');
  p1.textContent = temple.address;
  card.appendChild(p1);

  //p phone
  let p2 = document.createElement('p');
  p2.textContent = temple.phone;
  card.appendChild(p2);

  //p website
  let p3 = document.createElement('a');
  p3.href = temple.website;
  p3.textContent = "Visit Website >";
  p3.setAttribute('class', 'website-link');
  p3.setAttribute("target", "_blank");
  card.appendChild(p3);

  //button div
  let morebtn = document.createElement('button');
  morebtn.textContent = "See more...";
  morebtn.setAttribute('id', 'morebtn');
  morebtn.setAttribute('value', "more-btn");

  card.appendChild(morebtn);

  //div more info
  let morediv = document.createElement('div');
  morediv.setAttribute('class', 'morediv');
  card.appendChild(morediv);
  morediv.hidden = true;

  //showing div
  morebtn.addEventListener("click", () => {
    morediv.hidden = !morediv.hidden;
    if(morediv.hidden) {
        morebtn.textContent = "See More...";
    }
    else {
        morebtn.textContent = "See Less...";
    }
    });

  //section Service
  let servicesection = document.createElement('section');
  servicesection.setAttribute('class', 'service-sect');
  morediv.appendChild(servicesection);
  //h3 Service heading
  let serviceh3 = document.createElement('h3');
  serviceh3.textContent = "Services";
  servicesection.appendChild(serviceh3);
  //ul Services
  let serviceul = document.createElement('ul');
  temple.services.forEach((service) => {
    const serviceli = document.createElement("li");
    serviceli.textContent = service;
    serviceul.appendChild(serviceli);
  });
  servicesection.appendChild(serviceul);


  //section History
  let historysection = document.createElement('section');
  historysection.setAttribute('class', 'history-sect');
  morediv.appendChild(historysection);
  //h3 History heading
  let historyh3 = document.createElement('h3');
  historyh3.textContent = "History";
  historysection.appendChild(historyh3);
  //ul History
  let historyul = document.createElement('ul');
  temple.history.forEach((history) => {
    const historyli = document.createElement("li");
    historyli.textContent = history;
    historyul.appendChild(historyli);
  });
  historysection.appendChild(historyul);

  //section Ord & Sess Sched
  let schedsection = document.createElement('section');
  schedsection.setAttribute('class', 'sched-sect');
  morediv.appendChild(schedsection);
  //h3 Ord and Sess Sched heading
  let schedh3 = document.createElement('h3');
  schedh3.textContent = "Ordinance and Session Schedule";
  schedsection.appendChild(schedh3);
  //p Sched
  let psched = document.createElement('p');
  psched.textContent = temple.ordinsched;
  schedsection.appendChild(psched);

  //section Closed Sched
  let closedsection = document.createElement('section');
  closedsection.setAttribute('class', 'closed-sect');
  morediv.appendChild(closedsection);
  //h3 Closed heading
  let closedh3 = document.createElement('h3');
  closedh3.textContent = "Temple Closures";
  closedsection.appendChild(closedh3);
  //ul History
  let closedul = document.createElement('ul');
  temple.tempclosesched.forEach((tempclosesched) => {
    const closedli = document.createElement("li");
    closedli.textContent = tempclosesched;
    closedul.appendChild(closedli);
  });
  closedsection.appendChild(closedul);

  cards.appendChild(card);

}