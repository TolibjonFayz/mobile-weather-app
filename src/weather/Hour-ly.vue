<template>
  <ion-list v-if="weather?.hourly">
    <!-- <ion-list-header>Forecast</ion-list-header> -->
    <ion-item v-for="hourly in weather.hourly" :key="hourly.dt">
      <ion-avatar>
        <div class="weather-background">
          <img
            :src="`https://openweathermap.org/img/wn/${hourly.weather[0].icon}@2x.png`"
            alt="img"
          />
        </div>
      </ion-avatar>
      <ion-label>
        <h1>
          {{
            new Date(hourly.dt * 1000).toLocaleTimeString(undefined, {
              day: "2-digit",
            })
          }}
        </h1>
        <h2>{{ formatTemperature(hourly.temp, "C") }}</h2>
        <h2>{{ hourly.weather[0].description.toUpperCase() }}</h2>
      </ion-label>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useWeather } from "./weather.service";
import { IonAvatar, IonItem, IonLabel, IonList } from "@ionic/vue";
import commonIonicComponents from "../shared/common-ionic-components";

export default defineComponent({
  components: {
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    ...commonIonicComponents,
  },
  setup() {
    const { weather, fetchWeather, getWeatherImageUrl, formatTemperature } =
      useWeather();
    onMounted(fetchWeather);

    return { weather, getWeatherImageUrl, formatTemperature };
  },
});
</script>

<style scoped>
.weather-background {
  background-color: skyblue;
  border-radius: 100%;
  border: 2px solid white;
}
ion-avatar {
  margin-right: 10px;
}
</style>
