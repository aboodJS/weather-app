<script setup>
import { ref } from "vue";
import DayBox from "./components/DayBox.vue";

async function GetDataFromServer(name) {
  try {
    await fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: name.toLowerCase() }),
    })
      .then((res) => res.json())
      .then((d) => (results.value = d));
  } catch (error) {
    console.log(error);
  }
  console.log(query.value);
}
const results = ref();
const query = ref("");
</script>

<template>
  <nav class="flex justify-between w-[90vw] mx-auto py-3 items-center">
    <h3>ajs weather</h3>
    <div>
      <input
        v-model="query"
        class="w-76"
        type="text"
        placeholder="enter the full name of a city eg. 'amman'"
      />
      <button @click="() => GetDataFromServer(query)">Search</button>
    </div>
  </nav>
  <main>
    <section class="flex gap-6 justify-evenly items-center h-screen" v-if="results !== undefined">
      <DayBox
        v-for="condition in results.daily.data"
        :date="condition.day"
        :weather="condition.weather"
        :summary="condition.summary"
      ></DayBox>
    </section>
  </main>
</template>

<style scoped></style>
