<template>
  <div class="w-container">
    <div
      class="cards grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] justify-items-center gap-[12px] py-4 md:py-8"
    >
      <Card
        v-for="card in limitedCards"
        :key="card.id"
        :data="card"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import Card from "@/components/Card.vue";
import { useMovie } from "@/composables/useMovie";

const { getAllMovies } = useMovie();

const cards = ref(await getAllMovies());

const limitedCards = computed(() =>
  cards.value.slice(0, 16)
);
</script>
