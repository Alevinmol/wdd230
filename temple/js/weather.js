const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=38.9832518&lon=-77.0977205&units=imperial&appid=ee1e94bc126f3da0df6ecff404220794'

const DaysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const MonthsOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const t = Math.floor(jsObject.current.temp);
    document.querySelector('#current-temp').textContent = t;

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
    const desc = jsObject.current.weather[0].description;
    const humidity = jsObject.current.humidity;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('#desc').textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
    document.querySelector('#humid').textContent = humidity;

    const alert = jsObject.alert;

    if (alert) {
        const alertMessage = document.querySelector("#alert-message");
        alertMessage.style.display = "block";
        const message = alertMessage.querySelector("#message");
        message.textContent = alert.description;
        const closeBtn = alertMessage.querySelector("#close-btn");
        closeBtn.addEventListener("click", () => {
            alertMessage.style.display = "none";
        });
    }

    document.querySelectorAll(".three-day").forEach((value, index) => {
        const day = jsObject.daily[index];

        const date = new Date(day.dt * 1000);
        const image = value.querySelector("img");
        const desc = day.weather[0].description;
        image.setAttribute("alt", desc)
        image.src = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
        value.querySelector(".current-temp").textContent = Math.floor(day.temp.day);
        value.querySelector(".day").textContent = `${DaysOfWeek[date.getDay()]} ${MonthsOfYear[date.getMonth()]} ${date.getDate()}`;
    })
  });