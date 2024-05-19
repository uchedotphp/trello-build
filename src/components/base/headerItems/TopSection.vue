<script setup>
import menuIcon from '../../../assets/images/svgs/menu.svg'
import homeIcon from '../../../assets/images/svgs/home.svg'
import addIcon from '../../../assets/images/svgs/add.svg'
import trelloLogo from '../../../assets/images/svgs/trello-logo.png'
import infoIcon from '../../../assets/images/svgs/info-circle.svg'
import notificationIcon from '../../../assets/images/svgs/notification.svg'
import profileImg from '../../../assets/images/profile.png'
import searchIcon from '../../../assets/images/svgs/search.svg'
import RoundedBtn from '../buttons/RoundedBtn.vue'
import BaseBtn from '../buttons/BaseBtn.vue'
</script>

<template>
  <section class="nav-header top-section">
    <section>
      <RoundedBtn class="bg-[var(--tr-off-white)]">
        <template #label>
          <img :src="menuIcon" alt="menu icon" />
        </template>
      </RoundedBtn>
      <RoundedBtn class="bg-[var(--tr-off-white)]">
        <template #leftIcon>
          <img :src="homeIcon" alt="home icon" />
        </template>
      </RoundedBtn>
      <RoundedBtn class="circular-icon add-icon">
        <template #leftIcon>
          <img :src="addIcon" alt="add icon" />
        </template>
      </RoundedBtn>
    </section>
    <section>
      <div class="search">
        <label for="search">
          <img :src="searchIcon" alt="search icon" />
        </label>
        <input id="search" type="text" placeholder="Search..." class="focus:outline-none" />
      </div>
      <RoundedBtn class="bg-[var(--tr-off-white)]">
        <template #leftIcon>
          <img :src="infoIcon" alt="info icon" />
        </template>
      </RoundedBtn>
      <RoundedBtn class="bg-[var(--tr-off-white)]">
        <template #leftIcon>
          <img :src="notificationIcon" alt="notification icon" />
        </template>
      </RoundedBtn>
      <BaseBtn class="profile-img">
        <template #leftIcon>
          <img :src="profileImg" alt="profile image" />
        </template>
      </BaseBtn>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.top-section {
  section {
    @apply flex items-center space-x-3;
  }
  .app-logo img {
    @apply h-5;
  }
  .search {
    @apply relative flex items-center py-2 px-2.5 bg-[var(--tr-off-white)] rounded-[30px];
    input {
      @apply bg-transparent ml-2.5;
    }
  }
}

.profile-img {
  @apply h-8 w-8;
}
</style>
