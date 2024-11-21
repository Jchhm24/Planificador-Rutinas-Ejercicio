<template>
  <div class="container-content p-4 max-w-[32.8%]">
    <h5 class="font-bold">
      {{ routine.name }}
    </h5>
    <p class="text-base">
      Tipo de rutina: {{ routine.type }}
    </p>
    <span class="font-light">
      {{ routine.getState() }}
    </span>
    <section class="flex flex-row gap-2 flex-wrap p-2 bg-black/60 rounded-xl">
      <button @click="emitPaused"
        class="px-4 py-2 rounded-lg border-2 font-bold bg-red-600 outline-none" :class="{'opacity-60' : selectStatus === 0}">
        Paused
      </button>
      <button @click="emitInProgress"
        class="px-4 py-2 rounded-lg border-2 font-bold bg-cyan-600 outline-none" :class="{'opacity-60' : selectStatus === 1}">
        InProgress
      </button>
      <button @click="emitCompleted"
        class="px-4 py-2 rounded-lg border-2 font-bold bg-green-600 outline-none" :class="{'opacity-60' : selectStatus === 2}">
        Completed
      </button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps } from 'vue'

const props = defineProps<{
  routine: any
}>()

const emit = defineEmits(['setInProgress', 'setPaused', 'setCompleted'])

const selectStatus = ref<number>(0)

const changeSelectStatus = (index: number) => {
  selectStatus.value = index
}

const emitPaused = () => {
  emit('setPaused', props.routine.id)
  changeSelectStatus(0)
}

const emitInProgress = () => {
  emit('setInProgress', props.routine.id)
  changeSelectStatus(1)
}

const emitCompleted = () => {
  emit('setCompleted', props.routine.id)
  changeSelectStatus(2)
}
</script>
