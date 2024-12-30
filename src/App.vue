<template>
  <Header />
  <div
    class="main mt-[60px] md:mt-[100px] flex-1 flex justify-center"
  >
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Transition name="fade" mode="out-in">
          <Suspense>
            <component :is="Component" />
          </Suspense>
        </Transition>
      </template>
    </RouterView>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
