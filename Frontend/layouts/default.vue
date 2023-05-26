<template>
  <div class="flex h-screen" :class="{ 'overflow-hidden': isSideMenuOpen }">
    <!-- <SideBar /> -->
    <div class="w-full bg-gray-100 dark:bg-gray-900">
      <main class="h-screen overflow-y-auto">
        <AppHeader />
        <div class="container px-6 mx-auto">
          <slot />
        </div>
      </main>
    </div>

    <!-- <footer>this is Footer</footer> -->
  </div>
</template>

<script setup lang="ts">
  import { useStorage } from '@vueuse/core';
  const isSideMenuOpen = useStorage('isSideMenuOpen', false);
</script>

<style scoped></style>
