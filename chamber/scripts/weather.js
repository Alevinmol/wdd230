const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windspeed = document.querySelector('#speed')
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=17.57&lon=-92.95&appid=ee1e94bc126f3da0df6ecff404220794&units=imperial';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // testing only
        displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', "weather icon");
    captionDesc.textContent = `${desc}`;
    windspeed.textContent = `${data.wind.speed}`;
}

const apiUrl =
"https://api.openweathermap.org/data/2.5/forecast?lat=17.57&lon=-92.95&appid=ee1e94bc126f3da0df6ecff404220794&units=imperial";

fetch(apiUrl)
.then((response) => response.json())
.then((data) => {
  const forecastContainer =
    document.getElementById("forecast-container");

  const filteredForecast = data.list.filter((item, index, arr) => {
    return (
      index ===
      arr.findIndex(
        (day) =>
          new Date(day.dt * 1000).getDate() ===
          new Date(item.dt * 1000).getDate()
      )
    );
  });

  filteredForecast.forEach((day) => {
    const date = new Date(day.dt * 1000).toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
    const temperature = day.main.temp;
    const description = day.weather[0].description;

    const forecastCard = document.createElement("div");
    forecastCard.classList.add("forecast-card");
    forecastCard.innerHTML = `
    <h2>${date}</h2>
    <p>${temperature}°F</p>
    <p>${description}</p>
  `;

    forecastContainer.appendChild(forecastCard);
  });
})
.catch((error) => {
  console.error("Error fetching weather data:", error);
});

// I got help from AI to create the forecast js //