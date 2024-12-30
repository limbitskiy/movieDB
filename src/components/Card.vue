<template>
  <RouterLink :to="`/movie/${id}`">
    <div class="card-cnt relative">
      <div
        class="purple-background absolute inset-0 bg-[var(--purple-color)] rounded-[16px] z-10"
      ></div>
      <div
        class="card flex flex-col bg-[var(--black-color)] rounded-[16px] p-[12px] gap-[12px] relative z-20 transition-transform"
      >
        <img
          class="w-full h-[30dvh] sm:h-[25dvh] object-cover rounded-[8px]"
          :src="poster"
        />
        <div
          class="card-data flex flex-col gap-[8px]"
        >
          <span
            class="text-[clamp(20px,4vw,28px)] font-bold line-clamp-1"
            >{{ name }}</span
          >
          <span
            class="text-[14px] font-medium line-clamp-2"
            >{{ description }}</span
          >
        </div>

        <div class="card-tags flex gap-2">
          <Tag type="score" :data="rating" />
          <Tag type="genre" :data="genre" />
          <Tag type="duration" :data="duration" />
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import { CardProps } from "@/types";

const props = defineProps<{
  data: CardProps;
}>();

const {
  id,
  name,
  description,
  poster,
  rating,
  genre,
  duration,
} = toRefs(props.data);
</script>
