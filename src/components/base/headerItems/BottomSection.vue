<script setup>
import menuIcon from '../../../assets/images/svgs/menu.svg'
import elementPlus from '../../../assets/images/svgs/element-plus.svg'
import starIcon from '../../../assets/images/svgs/star.svg'
import BaseBtn from '../buttons/BaseBtn.vue'
import RoundedBtn from '../buttons/RoundedBtn.vue'
</script>
<template>
  <section class="nav-header bottom-section">
    <section>
      <h2>Brackets</h2>
      <RoundedBtn class="bg-[var(--tr-off-white)]">
        <template #leftIcon>
          <img :src="starIcon" alt="" srcset="" />
        </template>
      </RoundedBtn>

      <button class="circular-icon">
        <img :src="menuIcon" alt="menu icon" />
      </button>

      <BaseBtn>
        <template #leftIcon>
          <img :src="elementPlus" alt="" />
        </template>
        <template #label> Grouped by </template>
      </BaseBtn>

      <button class="circular-icon">
        <img :src="menuIcon" alt="menu icon" />
      </button>
      <button class="circular-icon">
        <img :src="menuIcon" alt="menu icon" />
      </button>
      <button class="circular-icon">
        <img :src="menuIcon" alt="menu icon" />
      </button>
      <button class="circular-icon">
        <img :src="menuIcon" alt="menu icon" />
      </button>
      <button class="circular-icon">
        <img :src="menuIcon" alt="menu icon" />
      </button>
      <button class="circular-icon">
        <img :src="menuIcon" alt="menu icon" />
      </button>
    </section>
    <section>two</section>
  </section>
</template>

<style lang="scss" scoped>
.bottom-section {
  section {
    @apply flex items-center space-x-3;
  }

  h2 {
    @apply font-semibold;
    font-size: var(--tr-md-font-size);
    line-height: 26.25px;
    color: var(--tr-black);
  }
}
</style>
