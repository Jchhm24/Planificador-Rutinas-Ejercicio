<template>
  <div class="absolute bg-black/75 h-screen w-full right-0 top-0 flex flex-col items-center justify-center backdrop-blur-sm p-5 z-10" >
    <form class="container-content flex flex-col gap-3 px-7 py-14 w-2/6 relative" >
      <h2 class="text-2xl text-center font-black " >
        Crea tu rutina
      </h2>

      <button class="p-2 rounded-lg absolute top-0 right-0 bg-white/10 m-4 outline-none" @click.prevent="toggleStateModal" >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"/></svg>
      </button>

      <label class="flex flex-col gap-1" >
        Nombre de la rutina:
        <input type="text" v-model="name" placeholder="Escribe el nombre de la rutina" required
          class="inputs"
        >
      </label>

      <div class="flex flex-col gap-2">

        <span>
          Escoge el tipo de ejercicio: {{ typeSelected }}
        </span>

        <section class="flex flex-row flex-wrap gap-2 w-full bg-black/60 p-5 rounded-xl" >

          <button v-for="type, index in types" v-bind:key="index" @click.prevent="changeType(index)"
            :class="['button-'+index, {'opacity-65 border-2': index === indexSelected}]" class="py-2 px-4 rounded-lg outline-none font-bold"
          >
              {{ type }}
          </button>

        </section>

      </div>

      <button class="create-routine py-2 px-4 rounded-lg border-2 outline-none font-bold w-max mx-auto mt-2" @click="handleSubmit" >
        Crear rutina
      </button>

    </form>
  </div>
</template>
<script  setup lang="ts" >
import { RoutineBuilder } from '@/models/RoutineBuilder';
import { PausedState } from '@/models/RoutineState';
import { ref, defineProps } from 'vue';


const props = defineProps<{
  toggleStateModal: () => void
}>()

const emit = defineEmits(['saveRoutine'])

const name = ref<string>('')

const types = ['strength', 'cardio', 'mixed']

type RoutineType = 'strength' | 'cardio' | 'mixed';

const typeSelected = ref<RoutineType>('strength')

const changeType = (index: number) => {
  typeSelected.value = types[index] as RoutineType
  indexSelected.value = index
}

const indexSelected = ref<number>(0)

// Función para mandar a crear la tarea
const handleSubmit = () => {
  const builder = new RoutineBuilder()
  const routine = builder.setName(name.value).setType(typeSelected.value).setState(new PausedState()).build()
  window.alert('Rutina creada con éxito')
  emit('saveRoutine', routine)


  props.toggleStateModal()

  name.value = ''
  typeSelected.value = 'strength'
}

</script>

<style scoped>
  .button-0{
    background-image: linear-gradient(-45deg, #ffbe01, #c542ab 55%);
  }

  .button-1{
    background-image: linear-gradient(-45deg, #ff0101, #c5b142 55%);
  }

  .button-2{
    background-image: linear-gradient(-45deg, #f501ff, #42c5c2 55%);
  }

  .create-routine{
    background-image: linear-gradient(-45deg, #01c9ff, #42c598 55%);
  }
</style>
