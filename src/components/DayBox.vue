<script setup>
const props = defineProps(["date", "weather", "summary"]);
</script>

<template>
  <div class="text-center grid text-sm h-56 w-38 bg-blue-500 rounded">
    <p>{{ props.date }}</p>
    <p>{{ props.weather }}</p>
    <p>{{ props.summary }}</p>
  </div>
</template>
