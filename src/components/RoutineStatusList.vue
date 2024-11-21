<template>
  <div class="flex flex-col gap-3">
    <h3 class="border-b border-r border-zinc-800 pb-2 text-xl font-bold" >
      {{ title }}
    </h3>

    <article class="flex flex-row flex-wrap gap-2" >

      <CardRoutineState :stateRoutines="stateRoutines" />

    </article>
  </div>
</template>
<script setup lang="ts" >
import type { Routine } from '@/models/Routine';
import CardRoutineState from './cards/CardRoutineState.vue';


const props = defineProps<{
  title: string,
  stateRoutines: Routine[]
}>()

</script>

