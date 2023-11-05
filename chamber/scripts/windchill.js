const t = parseInt(document.getElementById('current-temp'))
const windsp = parseInt(document.getElementById('speed'))


if(t <= 50 && windsp > 3) {
    const windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(windsp,0.16) + 0.4275 * t * Math.pow(windsp,0.16)
    document.querySelector("#windchill").innerHTML = `${Math.round(windchill)}&#176;F`;
  }
  else {
      document.querySelector("#windchill").innerHTML = "N/A"
  }