<template>
  <div class="grid-container w-full h-screen p-5">
    <!-- Sidebar de navegación -->
    <Sidebar />

    <!-- Header con formulario para crear rutinas -->
    <Header />

    <!-- Sección donde se muestran las vistas -->
    <section class="content">
      <router-view></router-view> <!-- Las vistas se inyectan aquí -->
    </section>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: auto 1fr;
  gap: 20px;
  grid-template-areas:
    "sidebar header"
    "sidebar content";
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.content {
  grid-area: content;
}
</style>
