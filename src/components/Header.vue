<template>
  <div
    class="header fixed top-0 left-0 right-0 h-[60px] md:h-[100px] grid place-items-center bg-[var(--black-color)] z-[999]"
    style="
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    "
  >
    <div class="w-container">
      <RouterLink to="/"
        ><h1
          class="font-bold text-[clamp(20px,4vw,32px)]"
        >
          Test task
        </h1></RouterLink
      >
    </div>
  </div>
</template>
