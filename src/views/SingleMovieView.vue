<template>
  <div
    class="single-movie flex justify-center py-4 md:py-0"
  >
    <div
      class="w-container block grid-cols-[minmax(225px,_1fr)_5fr] md:grid gap-4"
    >
      <aside
        class="flex flex-col gap-4 relative overflow-hidden"
      >
        <div
          class="fixed-sidebar md:fixed top-[calc(100px+5dvh)] flex flex-col gap-4"
        >
          <h2
            class="text-[clamp(20px,4vw,32px)] font-bold"
          >
            {{ name }}
          </h2>
          <img
            class="md:h-[30dvh] object-cover rounded-[8px] w-full"
            src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/three_thousand_years_of_longing_240x360_crop_center.progressive.jpg?v=1656957331"
          />

          <div
            class="single-movie-tags flex gap-2"
          >
            <Tag type="score" :data="rating" />
            <Tag type="genre" :data="genre" />
            <Tag
              type="duration"
              :data="duration"
            />
          </div>
        </div>
      </aside>

      <div
        class="single-movie-text flex flex-col gap-4 md:max-w-[60%] py-[5dvh]"
      >
        <div
          class="single-movie-description flex flex-col gap-4"
        >
          <h2
            class="text-[clamp(20px,4vw,32px)] font-bold"
          >
            Description
          </h2>
          <p>
            {{ description }}
          </p>
        </div>

        <div
          class="single-movie-trivia flex flex-col gap-4"
        >
          <h2
            class="text-[clamp(20px,4vw,32px)] font-bold"
          >
            Trivia
          </h2>
          <ul class="list-disc list-inside">
            <li v-for="item in trivia">
              {{ item }}
            </li>
          </ul>
        </div>

        <div
          class="single-movie-actors flex flex-col gap-4"
        >
          <h2
            class="text-[clamp(20px,4vw,32px)] font-bold"
          >
            Actors
          </h2>
          <ul class="list-disc list-inside">
            <li v-for="actor in actors">
              <a
                class="underline"
                :href="`https://imdb.com/actor/${actor.imdb_id}`"
                target="_blank"
                >{{ actor.name }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useMovie } from "@/composables/useMovie";
import { onMounted } from "vue";

const { getSingleMovie } = useMovie();

const route = useRoute();
const movieId = route.params.id;

const {
  name,
  duration,
  rating,
  genre,
  description,
  trivia,
  actors,
} = await getSingleMovie(+movieId);

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
