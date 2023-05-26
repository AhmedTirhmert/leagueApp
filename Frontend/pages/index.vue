<template>
  <div class="grid">
    <div v-if="isLoading" class="my-8 h-3 w-1/12 bg-slate-300 rounded"></div>
    <h2
      v-else
      class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"
    >
      Champions <span>({{ championsCount }})</span>
    </h2>

    <!-- Cards -->
    <div class="grid gap-6 mb-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      <!-- Card -->
      <!-- LOADING -->
      <div
        v-if="isLoading"
        class="flex flex-col items-top p-4 bg-white rounded-lg shadow-sm gap-4 dark:bg-gray-800"
        v-for="i in 4"
      >
        <div class="flex items-center gap-3 animate-pulse">
          <div class="rounded-full bg-slate-300 h-14 w-14"></div>
          <div class="h-4 w-1/2 bg-slate-300 rounded"></div>
        </div>

        <div class="animate-pulse">
          <div
            v-for="x in 5"
            class="h-2 bg-slate-300 rounded col-span-2 mb-3"
          ></div>
        </div>
      </div>
      <ChampionCard v-else v-for="champion in champions" :champion="champion" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import resources from '~/resources';

  //PROPS & EMITS

  //COMPOSABLES
  const championApi = resources.champion();

  //VARIABLES
  const champions = ref({});
  //LOADINGS
  const isLoading = ref(true);
  //FUNCTIONS
  const loadChampions = async () => {
    try {
      isLoading.value = true;
      const { data } = await championApi.getAll();
      champions.value = data;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };
  //COMPUTED & WATCHERS
  const championsCount = computed(() => {
    return Object.values(champions.value)?.length;
  });
  //LIFE CYCLE HOOKS
  onMounted(async () => {
    await loadChampions();
  });
</script>

<style scoped></style>
