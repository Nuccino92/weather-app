const weather = (() => {
  function convertData(data) {
    const {
      name: cityname,
      main: { temp: temperature, feels_like: feelsLike },
      wind: { speed: windSpeed },
      weather: [{ description }],
    } = data;
    return {
      cityname,
      temperature,
      feelsLike,
      windSpeed,
      description,
    };
  }

  async function getWeather(location) {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&id=524901&appid=fd980ffa5554f886734c39ccdd9f2751`;
    try {
      const response = await fetch(endpoint, { mode: "cors" });
      if (!response.ok)
        throw new Error(`We could not find ${location} for you :(`);
      const data = convertData(await response.json());
      return data;
    } catch (error) {
      alert(error);
      return null;
    }
  }
  return { getWeather };
})();

export default weather;
