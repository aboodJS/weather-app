<script setup>
const props = defineProps(["date", "weather", "summary", "icon"]);
console.log(props.icon);
</script>

<template>
  <div
    class="text-center justify-self-center self-center grid text-sm md:h-72 md:w-80 max-md:h-50 max-md:w-28 justify-center content-evenly text-white bg-slate-600 rounded"
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
