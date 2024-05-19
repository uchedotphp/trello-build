<script setup lang="ts">
import { useSlots, computed } from 'vue'
const slotsAvailable = useSlots()
const displayBtn = computed(
  () => slotsAvailable.leftIcon || slotsAvailable.label || slotsAvailable.rightIcon
)
</script>

<template>
  <button v-if="displayBtn" class="base-btn rounded-btn">
    <slot v-if="$slots.leftIcon" name="leftIcon" />
    <span v-if="$slots.label">
      <slot name="label" />
    </span>
    <slot v-if="$slots.rightIcon" name="rightIcon" />
  </button>
</template>

<style lang="scss" scoped>
.rounded-btn {
  @apply p-1.5 rounded-full;
}
</style>
