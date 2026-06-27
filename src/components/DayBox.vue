<script setup>
const props = defineProps(["date", "weather", "summary"]);
</script>

<template>
  <div class="text-center grid text-sm h-72 justify-center content-evenly bg-slate-600 rounded">
    <p>{{ props.date }}</p>
    <div>
      <p>{{ props.weather }}</p>
      <p>{{ props.summary }}</p>
    </div>
  </div>
</template>
