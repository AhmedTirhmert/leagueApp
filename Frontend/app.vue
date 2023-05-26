<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script lang="ts" setup>
  import { useStorage } from '@vueuse/core';
  const dark = useStorage('dark', false);
  const darkClass = useHead({
    bodyAttrs: {
      class: [
        computed(() => {
          return dark.value ? 'dark' : '';
        }),
        'h-screen',
      ],
    },
  });
</script>
