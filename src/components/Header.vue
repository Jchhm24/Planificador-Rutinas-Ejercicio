<template>
  <header class="header container-content h-max flex flex-row justify-between items-center py-5 px-10">
    <h1 class="text-3xl font-black tracking-wide">
      Tus rutinas
    </h1>

    <button @click="toggleStateModal" class="flex flex-row gap-1 py-2 px-4 rounded-lg border-2 outline-none font-bold" >
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
        <path
          d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z" />
      </svg>
      Crear rutina

    </button>
  </header>

  <RoutineForm v-if="state" :toggleStateModal="toggleStateModal" @saveRoutine="saveRoutine" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
import RoutineForm from '@/components/RoutineForm.vue';

import { useRoutineStore } from '@/stores/routines';

const routineStore = useRoutineStore()

const saveRoutine = (routine: any) => {
  routineStore.addRoutine(routine)
}

const state = ref<boolean>(false)

const toggleStateModal = () => {
  state.value = !state.value
}


</script>


<style scoped >
  button{
    background-image: linear-gradient(-45deg, #01c9ff, #42c598 55%);
  }
</style>
