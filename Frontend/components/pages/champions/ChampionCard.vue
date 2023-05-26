<template>
  <RouterLink :to="{ name: 'champions-id', params: { id: champion.name } }">
    <div
      class="champion-card flex flex-col items-top p-4 bg-white rounded-lg shadow-sm gap-4 dark:bg-gray-800 duration-150"
    >
      <div class="grid grid-cols-5 grid-rows-1 items-center gap-2 h-16">
        <div class="">
          <img
            class="rounded-full"
            :src="`http://ddragon.leagueoflegends.com/cdn/13.9.1/img/champion/${champion.image.full}`"
            alt=""
          />
        </div>
        <div class="col-span-3">
          <p class="text-3xl font-bold text-gray-700 dark:text-gray-200">
            {{ champion.name }}
          </p>
          <small
            class="capitalize font-semibold text-gray-700 dark:text-gray-300"
            >{{ champion.title }}</small
          >
        </div>

        <div class="flex flex-col gap-2">
          <span
            v-for="tag in champion.tags"
            class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-blue-900 dark:text-blue-300"
            style="font-size: 0.6rem"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <div>
        <p class="mb-2 text-xs font-medium text-gray-600 dark:text-gray-400">
          {{ champion.blurb }}
        </p>
      </div>
      <div class="flex items-center gap-3 h-5">
        <span
          class="bg-gray-100 rounded-full text-gray-800 text-xs font-medium inline-flex gap-2 items-center px-2.5 py-1 mr-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 min-w-max"
        >
          <Iconify icon="charm:sword" />
          <span>{{ champion.stats.attackdamage }}</span>
          <Iconify icon="ph:shield-checkered-fill" />
          <span>{{ champion.stats.armor }}</span>
          <Iconify icon="mdi:google-circles-group" />
          <span>{{ champion.stats.attackrange }}</span
          ><Iconify icon="jam:chronometer" />
          <span>{{ champion.stats.attackspeed }}s</span>
        </span>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
  interface props {
    champion: Champion;
  }
  //PROPS & EMITS
  const props = defineProps<props>();
  //COMPOSABLES

  //VARIABLES

  //LOADINGS

  //FUNCTIONS

  //COMPUTED & WATCHERS

  //LIFE CYCLE HOOKS
  onMounted(() => {});
</script>

<style lang="scss" scoped>
  .champion-card{
    &:hover{
      transform: scale(1.02);
    }
  }
</style>
