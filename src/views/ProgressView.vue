<template>
    <div class="flex flex-col gap-4" >
        <h2 class="font-bold text-4xl" >
            Progreso de tus rutinas
        </h2>

        <RoutineStatusList title="Rutinas pausadas" :stateRoutines="routinesPaused" />
        <RoutineStatusList title="Rutinas en progreso" :stateRoutines="routinesInProgress" />
        <RoutineStatusList title="Rutinas completadas" :stateRoutines="routinesCompleted" />

    </div>
</template>
<script setup lang="ts">
import RoutineStatusList from '@/components/RoutineStatusList.vue';
import { CompletedState, InProgressState, PausedState } from '@/models/RoutineState';
import { useRoutineStore } from '@/stores/routines';
import { computed } from 'vue';


const routineStore = useRoutineStore()

// Función para obtener las rutinas en un estado específico
const getStateRoutines = (state: any) => {
    return computed (() => routineStore.routines.filter(
        routines => routines.getState() === state.handle()
    ))
}

const routinesPaused = getStateRoutines(new PausedState())
const routinesInProgress = getStateRoutines(new InProgressState())
const routinesCompleted = getStateRoutines(new CompletedState())

</script>