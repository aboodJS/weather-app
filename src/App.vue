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
      body: JSON.stringify({ query: name.toLowerCase().split(" ").join("-") }),
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
  <nav
    class="flex max-md:grid max-md:justify-center max-md:text-center sticky top-0 justify-between mx-auto py-3 items-center backdrop-blur-md"
  >
    <h3 class="font-bold text-2xl text-white">ajs weather</h3>
    <div class="max-md:flex">
      <input
        v-model="query"
        class="w-76 bg-slate-300 rounded-l max-md:w-64"
        type="text"
        placeholder="enter a city's name eg. 'amman'"
      />
      <button
        class="text-white font-bold bg-black px-3 rounded-r cursor-pointer hover:bg-white hover:text-black transition-colors"
        @click="() => GetDataFromServer(query)"
      >
        Search
      </button>
    </div>
  </nav>
  <main>
    <section
      class="grid grid-cols-4 grid-rows-2 gap-2 justify-center content-center h-screen max-md:grid-rows-3 max-md:grid-cols-3 max-md:gap-4"
      v-if="results !== undefined"
    >
      <DayBox
        v-for="condition in results.daily.data"
        :date="condition.day"
        :weather="condition.weather"
        :summary="condition.summary"
        :icon="condition.icon"
      ></DayBox>
    </section>
  </main>
</template>

<style scoped></style>
