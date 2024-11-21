<template>
  <nav class="sidebar container-content flex flex-col gap-12 h-full w-max px-5 py-10">
    <textarea class="inputs resize-none  overflow-hidden"
      placeholder="Buscar rutinas ..." maxlength="35"
    ></textarea>

    <div class="flex flex-col gap-2 border-t border-zinc-700 py-4">
      <router-link to="/" class="router-link" :class="{ 'router-link-active' :getPath('/')}" >
        <svg :class="{ 'fill-zinc-950' :getPath('/')}"
        xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
          <path
            d="M240-200h120v-200q0-17 11.5-28.5T400-440h160q17 0 28.5 11.5T600-400v200h120v-360L480-740 240-560v360Zm-80 0v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H560q-17 0-28.5-11.5T520-160v-200h-80v200q0 17-11.5 28.5T400-120H240q-33 0-56.5-23.5T160-200Zm320-270Z" />
        </svg>
        Inicio
      </router-link>
      <!-- <router-link to="/crear-rutina">
      Crear Rutina
    </router-link> -->
      <router-link to="/progreso" class="router-link" :class="{ 'router-link-active' :getPath('/progreso')}" >
        <svg :class="{ 'fill-zinc-950' :getPath('/progreso')}"
          xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
          <path
            d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-130 75-234t199-145q29-10 53.5 7t24.5 46q0 20-11.5 36.5T391-747q-86 27-138.5 100.5T200-480q0 117 81.5 198.5T480-200q52 0 100.5-18t86.5-52q15-14 36.5-14t36.5 14q23 21 24 47.5T742-176q-54 47-120.5 71.5T480-80Zm280-400q0-92-53-165.5T568-747q-18-6-29.5-22.5T527-806q0-29 24.5-46t53.5-7q125 42 200 146t75 233q0 18-1.5 36.5T873-403q-5 29-29.5 41.5T790-360q-19-7-29.5-25.5T754-424q3-17 4.5-30t1.5-26Z" />
        </svg>
        Progreso
      </router-link>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';


const router = useRoute()

const getPath = (path: string) => {
   return  router.path === path
}

</script>
