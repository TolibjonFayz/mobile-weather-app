import { Geolocation } from "@capacitor/geolocation";
import { ref } from "vue";
import { OneWeather } from "./one-weather.model";

const weatherUrl =
  "https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,hourly&appid=7efa332cf48aeb9d2d391a51027f1a71";

const weather = ref<OneWeather>();

fetchWeather();
setInterval(fetchWeather, 120000);

export function useWeather() {
  return {
    weather,
    fetchWeather,
    formatTemperature,
    getWeatherImageUrl,
  };
}

async function fetchWeather() {
  const { coords } = await Geolocation.getCurrentPosition();
  const response = await fetch(
    `${weatherUrl}&lat=${coords.latitude}&lon=${coords.longitude}&units=imperial`
  );
  weather.value = await response.json();
}

function formatTemperature(value: number, format: "F" | "C") {
  const tocelsious = (value - 32) * (5 / 9);
  return `${Math.round(tocelsious)}° ${format}`;
}

function getWeatherImageUrl(iconName: string, size: "2x" | "4x") {
  return `http://openweathermap.org/img/wn/${iconName}@${size}.png`;
}
