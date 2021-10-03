function domFunctionality(weatherData) {
  const location = document.querySelector(".location");
  const temperature = document.querySelector(".temperature");
  const feelsLike = document.querySelector(".feels-like");
  const windSpeeds = document.querySelector(".wind-speeds");
  const description = document.querySelector(".status");

  location.textContent = weatherData.cityname;

  temperature.textContent = `${Math.round(weatherData.temperature)}`;

  feelsLike.textContent = `Feels like: ${Math.round(weatherData.feelsLike)}°C`;

  windSpeeds.textContent = `Winds: ${weatherData.windSpeed}km`;

  description.textContent = weatherData.description;
}
export default domFunctionality;
