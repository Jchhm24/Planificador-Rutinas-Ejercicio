<template>
  <section class="flex flex-row flex-wrap gap-2 w-full">
    <CardRoutine
      v-for="routine in routines"
      :key="routine.id"
      :routine="routine"
      @setInProgress="setInProgress"
      @setPaused="setPaused"
      @setCompleted="setCompleted"
    />
  </section>
</template>

<script setup lang="ts">
import { CompletedState, InProgressState, PausedState } from '@/models/RoutineState'
import { useRoutineStore } from '@/stores/routines'
import { computed } from 'vue'
import CardRoutine from './cards/CardRoutine.vue'

// Accedemos al store de rutinas
const routineStore = useRoutineStore()
const routines = computed(() => routineStore.routines)

// Funciones para poder cambiar los estados de las rutinas
const setInProgress = (id: string) => {
  routineStore.updateRoutineState(id, new InProgressState());
}

const setPaused = (id: string) => {
  routineStore.updateRoutineState(id, new PausedState())
}

const setCompleted = (id: string) => {
  routineStore.updateRoutineState(id, new CompletedState())
}
</script>
