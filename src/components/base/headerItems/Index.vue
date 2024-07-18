<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import TopSection from './TopSection.vue'
import BottomSection from './BottomSection.vue'
</script>

<template>
  <header>
    <TopSection />
    <BottomSection />
  </header>
</template>

<style lang="scss" scoped>
header {
  @apply w-full bg-white;
  box-shadow: 0px 1px 16px 0px rgba(0, 0, 0, 0.1);
  & > * {
    padding: 8px 20px;
  }
  & > *:not(:last-child) {
    border-bottom: 1px solid #e9ebec;
  }
}
</style>
