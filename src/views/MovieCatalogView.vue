<template>Main view</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMovie } from "@/composables/useMovie";

const { getAllMovies } = useMovie();

const response = ref(await getAllMovies());

console.log("🚀 ~ response:", response);
</script>
