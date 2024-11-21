<template>
  <div v-for="routine in stateRoutines" :key="routine.id"
    class="container-content p-4 max-w-[32.8%]"
  >
    <h5 class="font-semibold">
      {{ routine.name }}
    </h5>
    <p>
      Tipo de ejercicio:  {{ routine.type }}
    </p>
    <p>
     Estado: {{  routine.getState() }}
    </p>
  </div>
</template>
<script setup lang="ts">
import type { Routine } from '@/models/Routine';


const props = defineProps<{
  stateRoutines : Routine[]
}>()
</script>
