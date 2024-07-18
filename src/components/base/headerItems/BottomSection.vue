<script setup>
import elementPlus from '../../../assets/images/svgs/element-plus.svg'
import starIcon from '../../../assets/images/svgs/star.svg'
import filterIcon from '../../../assets/images/svgs/filter.svg'
import arrowsIcon from '../../../assets/images/svgs/down-up-arrows.svg'
import eyeIcon from '../../../assets/images/svgs/eye.svg'
import profileIcon from '../../../assets/images/svgs/profile.svg'
import usersIcon from '../../../assets/images/svgs/profile-2user.svg'
import userCircleIcon from '../../../assets/images/svgs/user-cirlce-add.svg'
import avatarImg from '../../../assets/images/avatar.png'
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

      <BaseBtn>
        <template #leftIcon>
          <img :src="elementPlus" alt="" />
        </template>
        <template #label> Grouped by </template>
      </BaseBtn>

      <BaseBtn>
        <template #leftIcon>
          <img :src="filterIcon" alt="" />
        </template>
        <template #label> Filter </template>
      </BaseBtn>

      <BaseBtn>
        <template #leftIcon>
          <img :src="arrowsIcon" alt="" />
        </template>
        <template #label> Sort </template>
      </BaseBtn>

      <BaseBtn>
        <template #leftIcon>
          <img :src="eyeIcon" alt="" />
        </template>
        <template #label> Show </template>
      </BaseBtn>

      <BaseBtn>
        <template #leftIcon>
          <img :src="profileIcon" alt="" />
        </template>
        <template #label> Me </template>
      </BaseBtn>

      <BaseBtn>
        <template #leftIcon>
          <img :src="usersIcon" alt="" />
        </template>
        <template #label> Everyone </template>
      </BaseBtn>
    </section>

    <!-- right area -->
    <section>
      <section class="avatars">
        <RoundedBtn v-for="n in 5" :key="n">
          <!-- <img :src="avatarImg" alt="" /> -->
          <template #leftIcon>
            <img :src="avatarImg" alt="profile image" />
          </template>
        </RoundedBtn>
        <BaseBtn
          class="bg-[var(--tr-bg-blue)] text-white rounded-full py-2 px-1 border-2 border-white"
        >
          <template #label> +10 </template>
        </BaseBtn>
      </section>
      <RoundedBtn class="bg-[var(--tr-off-white)] outline-4 outline-white">
        <template #leftIcon>
          <img :src="userCircleIcon" alt="" />
        </template>
        <template #label> Invite </template>
      </RoundedBtn>
    </section>
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

  .avatars {
    @apply flex-none relative -space-x-2;
    button img {
      @apply h-[30px] w-[30px];
    }
  }
}
</style>
