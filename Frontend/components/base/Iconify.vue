<template>
  <Icon
    :icon="icon"
    class="text-gray-700 dark:text-gray-200"
    :class="classes"
  />
</template>

<script setup lang="ts">
  import { Icon } from '@iconify/vue';
  interface props {
    icon: string;
    classes?: string;
  }

  defineProps<props>();
</script>

<style scoped></style>
