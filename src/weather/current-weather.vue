<template>
  <ion-card v-if="weather?.current">
    <div class="weather-background">
      <img
        :src="`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@4x.png`"
        alt=""
      />
    </div>
    <ion-card-header>
      <ion-card-title>{{ weather?.timezone }}</ion-card-title>
      <ion-card-title>{{
        formatTemperature(weather.current.temp, "C")
      }}</ion-card-title>
      <ion-card-subtitle>{{
        weather.current.weather[0].description.toUpperCase()
      }}</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      <ion-grid>
        <ion-row>
          <ion-col
            >Feels like
            {{ formatTemperature(weather.current.feels_like, "C") }}</ion-col
          >
          <ion-col
            >Wind Speed
            {{ Math.round(weather.current.wind_speed) }} mph</ion-col
          >
        </ion-row>
        <ion-row>
          <ion-col
            >Sunrise
            {{
              new Date(weather.current.sunrise * 1000).toLocaleTimeString(
                undefined,
                { timeStyle: "short" }
              )
            }}</ion-col
          >
          <ion-col
            >Sunset
            {{
              new Date(weather.current.sunset * 1000).toLocaleTimeString(
                undefined,
                { timeStyle: "short" }
              )
            }}</ion-col
          >
        </ion-row>
      </ion-grid>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useWeather } from "./weather.service";
import commonIonicComponents from "../shared/common-ionic-components";

export default defineComponent({
  components: {
    ...commonIonicComponents,
  },
  setup() {
    const { weather, formatTemperature, getWeatherImageUrl } = useWeather();

    return { weather, formatTemperature, getWeatherImageUrl };
  },
});
</script>

<style scoped>
ion-card {
  max-width: 500px;
}

ion-card img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.weather-background {
  background-color: skyblue;
}
</style>
