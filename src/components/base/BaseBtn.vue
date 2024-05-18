<script setup lang="ts"></script>

<template>
  <button class="base-btn">
    <slot name="left-icon" />
    <span v-if="$slots.label">
      <slot name="label" />
    </span>
    <slot name="right-icon" />
  </button>
</template>

<style lang="scss" scoped>
.base-btn {
  @apply font-normal text-[var(--tr-black)] flex items-center space-x-1.5;
  span {
    font-size: var(--tr-sm-font-size);
    line-height: 16.24px;
    text-align: left;
  }
}
</style>
