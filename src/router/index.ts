import { createWebHistory, createRouter } from "vue-router";

// views
import MovieCatalogView from "@/views/MovieCatalogView.vue";
import SingleMovieView from "@/views/SingleMovieView.vue";

const routes = [
  {
    path: "/",
    component: MovieCatalogView,
  },
  {
    path: "/movie/:id",
    component: SingleMovieView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
