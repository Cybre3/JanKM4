function attachEvents() {
  const getWeatherButton = document.getElementById("submit");
  const locationField = document.getElementById("location");
  const forecastDiv = document.getElementById("forecast");
  const currentWeatherDiv = document.querySelector("#current");
  const threeDayWeatherDiv = document.querySelector("#upcoming");
  const degreeSymbol = String.fromCharCode(8457);
  console.log(degreeSymbol);

  getWeatherButton.addEventListener("click", () => {
    console.log("clickidyclick");
    forecastDiv.style.display = "block";
    const weatherInfo = document.createElement("div");
    weatherInfo.setAttribute("class", "forecasts");

    let conditionSpan = document.createElement("span");
    let conditionSymbolImg = document.createElement("img");
    let locationSpan = document.createElement("span");
    let temperatureSpan = document.createElement("span");
    let conditionTypeSpan = document.createElement("span");

    var myHeaders = new Headers();
    myHeaders.append(
      "x-rapidapi-key",
      "9e3b640dd0msh933047c63870f32p159593jsn32f916cad387"
    );
    myHeaders.append("x-rapidapi-host", "weatherapi-com.p.rapidapi.com");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${locationField.value}&days=3`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        conditionSymbolImg.setAttribute("class", "condition symbol");
        conditionSpan.setAttribute("class", "condition");
        locationSpan.setAttribute("class", "forecast-data");
        temperatureSpan.setAttribute("class", "forecast-data");
        conditionTypeSpan.setAttribute("class", "forecast-data");

        locationSpan.textContent = `${data.location.name}, ${data.location.country}`;
        temperatureSpan.textContent = `${data.forecast.forecastday[0].day.mintemp_f}${degreeSymbol} / ${data.forecast.forecastday[0].day.maxtemp_f}${degreeSymbol}`;
        conditionTypeSpan.textContent = data.current.condition.text;

        conditionSymbolImg.src = `https:${data.forecast.forecastday[0].day.condition.icon}`;

        conditionSpan.appendChild(locationSpan);
        conditionSpan.appendChild(temperatureSpan);
        conditionSpan.appendChild(conditionTypeSpan);

        weatherInfo.appendChild(conditionSymbolImg);
        weatherInfo.appendChild(conditionSpan);
        currentWeatherDiv.appendChild(weatherInfo);
      })
      .catch((error) => console.log("error", error));
  });
}

attachEvents();
