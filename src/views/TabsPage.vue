<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <img
            :src="`https://openweathermap.org/img/wn/${weather?.current.weather[0].icon}@2x.png`"
            alt=""
          />
          <ion-label
            >Now {{ formatTemperature(weather?.current.temp, "C") }}</ion-label
          >
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="timeOutline" />
          <ion-label>Hourly Forecast</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="calendarOutline" />
          <ion-label>Daily Forecast</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonTabBar,
  IonRouterOutlet,
} from "@ionic/vue";
import { calendarOutline, timeOutline } from "ionicons/icons";
import { useWeather } from "../weather/weather.service";

export default {
  name: "Tabs",
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    const { weather, formatTemperature, getWeatherImageUrl } = useWeather();

    return {
      weather,
      formatTemperature,
      getWeatherImageUrl,
      calendarOutline,
      timeOutline,
    };
  },
};
</script>

<style scoped>
img {
  height: 26px;
  width: 26px;
  margin-bottom: 0;
  margin-top: 3px;
  background-color: skyblue;
  border-radius: 100%;
}
</style>
