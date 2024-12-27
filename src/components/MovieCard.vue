<template>
  <div class="movie-card">
    <span>{{ name }}</span>
    <span>{{ description }}</span>
  </div>
  <span></span>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import { MovieCardProps } from "@/types";

const props = defineProps<{
  data: MovieCardProps;
}>();

const { name, description } = toRefs(props.data);

console.log(name);
</script>
