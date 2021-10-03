import domFunctionality from "./dom";
import weather from "./weather";

document.querySelector(".search").addEventListener("submit", async (e) => {
  e.preventDefault();
  const location = document.querySelector("input").value;
  document.querySelector("input").value = null;
  const weatherData = await weather.getWeather(location);
  domFunctionality(weatherData);
});
