<template>
  <span>Individual movie</span>
  <span>{{ movieId }}</span>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useMovie } from "@/composables/useMovie";

const { getSingleMovie } = useMovie();

const route = useRoute();
const movieId = route.params.id;

const response = await getSingleMovie(+movieId);
console.log("🚀 ~ response:", response);
</script>
