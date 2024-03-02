<template>
  <div>
    <currentWeather></currentWeather>
    <ForeCast></ForeCast>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import currentWeather from "./current-weather.vue";
import ForeCast from "./Fore-cast.vue";

export default defineComponent({
  components: {
    currentWeather,
    ForeCast,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
./Forecast.vue./Fore-cast.vue
