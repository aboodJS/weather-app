<script setup>
import { useTemplateRef } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps(["date", "weather", "summary", "icon", "fullData"]);
console.log(props.icon);
const dialog = useTemplateRef("dialog");
</script>

<template>
  <dialog
    ref="dialog"
    class="bg-slate-600 md:h-[85vh] md:w-[65vw] max-md:w-[85vw] my-auto max-md:text-center max-md:h-[50vh] text-white mx-auto"
  >
    <Icon @click="dialog.close()" class="text-white text-4xl" icon="mdi:arrow-left"></Icon>
    <main class="grid justify-center content-evenly h-[90%]">
      <div class="grid justify-center">
        <img class="h-28" :src="`/src/assets/medium/${icon}.png`" alt="" />
        <p class="text-center">{{ props.weather }}</p>
      </div>
      <h1 class="text-center text-2xl font-bold">temperature</h1>
      <div class="flex gap-5 justify-center">
        <p>average temperature: {{ props.fullData["all_day"].temperature }}</p>
        <p>max temperature: {{ props.fullData["all_day"]["temperature_max"] }}</p>
        <p>min temperature: {{ props.fullData["all_day"]["temperature_min"] }}</p>
      </div>
      <h1 class="text-center text-2xl font-bold">wind</h1>

      <div class="flex gap-5 justify-center">
        <p>wind speed: {{ props.fullData["all_day"].wind.speed }}</p>
        <p>wind direction: {{ props.fullData["all_day"].wind.dir }}</p>
        <p>wind angle: {{ props.fullData["all_day"].wind.angle }}</p>
      </div>
    </main>
  </dialog>
  <div
    @click="dialog.showModal()"
    class="text-center hover:drop-shadow-md transition-all hover:drop-shadow-amber-50 justify-self-center self-center grid text-sm md:h-72 md:w-80 max-md:h-50 max-md:w-28 justify-center content-evenly text-white bg-slate-600 rounded"
  >
    <p>{{ props.date }}</p>
    <img
      class="h-20 w-20 max-md:h-14 max-md:w-14 justify-self-center"
      :src="`/src/assets/medium/${icon}.png`"
      alt=""
      srcset=""
    />
    <div>
      <p>{{ props.weather.split("_").join(" ") }}</p>
      <p class="max-md:text-xs">{{ props.summary }}</p>
    </div>
  </div>
</template>
