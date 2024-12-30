<template>
  <div
    class="tag flex items-center gap-1 px-[8px] py-[2px] rounded-full"
    :style="`background-color: var(--${tagColor}-color)`"
  >
    <div class="tag-icon">
      <img
        v-if="type === 'score'"
        :src="StarIcon"
      />
      <img
        v-else-if="type === 'genre'"
        :src="FilmIcon"
      />
      <img
        v-else-if="type === 'duration'"
        :src="TimerIcon"
      />
    </div>
    <span class="text-[11px] font-semibold">{{
      data
    }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import StarIcon from "@/assets/icons/star.svg";
import FilmIcon from "@/assets/icons/film.svg";
import TimerIcon from "@/assets/icons/timer.svg";

const props = defineProps<{
  type: "score" | "genre" | "duration";
  data: "string" | "number";
}>();

const tagColor = computed(() => {
  switch (props.type) {
    case "score": {
      return getScoreTagColor(+props.data);
    }
    case "genre": {
      return "blue";
    }
    case "duration": {
      return "purple";
    }
  }
});

const getScoreTagColor = (score: number) => {
  if (score >= 0 && score < 4) {
    return "red";
  } else if (score >= 4 && score < 7) {
    return "purple";
  } else if (score >= 7) {
    return "green";
  }
};
</script>
