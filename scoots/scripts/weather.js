const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const latitude = 20.42;
const longitude = -86.92;

const apiKey = "ee1e94bc126f3da0df6ecff404220794";

// Construct the API endpoint URLs
const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

// Fetch current weather data
fetch(currentWeatherUrl)
  .then((response) => response.json())
  .then((data) => {
    // Extract current temperature and humidity
    const currentTemperature = data.main.temp;
    const currentHumidity = data.main.humidity;

    // Display the current weather information on the webpage
    document.getElementById(
      "current-temperature"
    ).textContent = `Current Temperature: ${currentTemperature} °F`;
    document.getElementById(
      "current-humidity"
    ).textContent = `Current Humidity: ${currentHumidity}%`;
  })
  .catch((error) => {
    console.error("Error fetching current weather data:", error);
    document.getElementById("current-temperature").textContent =
      "Failed to fetch temperature";
    document.getElementById("current-humidity").textContent =
      "Failed to fetch humidity";
  });

// Fetch forecast data
fetch(forecastUrl)
  .then((response) => response.json())
  .then((data) => {
    // Find the forecast for the next day at 3 pm
    const nextDayForecast = data.list.find((item) => {
      const forecastDate = new Date(item.dt * 1000);
      return forecastDate.getHours() === 15; // 3 pm
    });

    // Extract temperature and humidity from the next day forecast
    const nextDayTemperature = nextDayForecast.main.temp;
    const nextDayHumidity = nextDayForecast.main.humidity;

    // Display the next day forecast information on the webpage
    document.getElementById(
      "next-day-temperature"
    ).textContent = `Next Day Temperature at 3 PM: ${nextDayTemperature} °F`;
    document.getElementById(
      "next-day-humidity"
    ).textContent = `Next Day Humidity at 3 PM: ${nextDayHumidity}%`;
  })
  .catch((error) => {
    console.error("Error fetching forecast data:", error);
    document.getElementById("next-day-temperature").textContent =
      "Failed to fetch temperature";
    document.getElementById("next-day-humidity").textContent =
      "Failed to fetch humidity";
  });

async function apiFetch() {
  try {
    const response = await fetch(currentWeatherUrl);
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
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', "weather icon");
  captionDesc.textContent = `${desc}`;
}
// I got help from AI to create the forecast js //