<template>
  <ion-list v-if="weather?.daily">
    <!-- <ion-list-header>Forecast</ion-list-header> -->
    <ion-item v-for="daily in weather.daily" :key="daily.dt">
      <ion-avatar>
        <div class="weather-background">
          <img
            :src="`https://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`"
            alt="img"
          />
        </div>
      </ion-avatar>
      <ion-label>
        <h1>
          {{
            new Date(daily.dt * 1000).toLocaleDateString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          }}
        </h1>
        <h2>{{ formatTemperature(daily.temp.day, "C") }}</h2>
        <h2>{{ daily.weather[0].description.toUpperCase() }}</h2>
      </ion-label>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useWeather } from "./weather.service";
import {
  IonAvatar,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
} from "@ionic/vue";
import commonIonicComponents from "../shared/common-ionic-components";

export default defineComponent({
  components: {
    IonList,
    IonListHeader,
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
