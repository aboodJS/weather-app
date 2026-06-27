<script setup>
const props = defineProps(["date", "weather", "summary", "icon"]);
console.log(props.icon);
</script>

<template>
  <div
    class="text-center justify-self-center self-center grid text-sm h-72 w-80 justify-center content-evenly text-white bg-slate-600 rounded"
  >
    <p>{{ props.date }}</p>
    <img
      class="h-20 w-20 justify-self-center"
      :src="`/src/assets/medium/${icon}.png`"
      alt=""
      srcset=""
    />
    <div>
      <p>{{ props.weather.split("_").join(" ") }}</p>
      <p>{{ props.summary }}</p>
    </div>
  </div>
</template>
