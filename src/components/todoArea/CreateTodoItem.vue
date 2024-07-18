<script setup lang="ts">
import BaseBtn from '../base/buttons/BaseBtn.vue'
import plusIcon from '../../assets/images/svgs/add-grey.svg'
</script>

<template>
  <BaseBtn class="new-item">
    <template #leftIcon>
      <img :src="plusIcon" alt="" />
    </template>
    <template #label> Add new list </template>
  </BaseBtn>
</template>

<style lang="scss" scoped>
.new-item {
  @apply w-full rounded-md py-2.5 px-6 flex justify-center bg-white;
  border: 0.73px dashed #d4d6d9;
}
</style>
