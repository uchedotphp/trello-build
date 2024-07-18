<script setup lang="ts">
import HeaderItem from '../components/base/headerItems/Index.vue'
import Todos from '../components/todoArea/Index.vue'
</script>

<template>
  <div class="wrapper h-full">
    <HeaderItem class="mb-4" />
    <!-- main view -->
    <main class="main-content">
      <Todos />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  @apply flex flex-col h-full overflow-hidden;
}
.main-content {
  @apply h-full bg-white px-4;
}
</style>
