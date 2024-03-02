<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Hourly Forecast</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Forecast</ion-title>
        </ion-toolbar>
      </ion-header>
      <HourLy></HourLy>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import { defineComponent } from "vue";
import HourLy from "../weather/Hour-ly.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Tab2",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    HourLy,
  },
});
</script>
