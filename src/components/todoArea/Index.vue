<script setup lang="ts">
import TodoItem from './TodoItem.vue'
import CreateTodoItem from './CreateTodoItem.vue'
import BaseBtn from '../../components/base/buttons/BaseBtn.vue'
import AddIcon from '../../assets/images/svgs/add-grey.svg'
import ellipsisIcon from '../../assets/images/svgs/ellipsis.svg'
import { todos } from './dummyData'
</script>

<template>
  <section class="h-full overflow-y-hidden overflow-x-scroll flex space-x-4">
    <div class="todo-layout" v-for="(index, title) in todos" :key="index">
      <section class="category">
        <span class="title">
          {{ title }}
        </span>
        <span class="flex items-center">
          <BaseBtn>
            <template #leftIcon>
              <img :src="AddIcon" alt="" />
            </template>
          </BaseBtn>

          <BaseBtn>
            <template #leftIcon>
              <img :src="ellipsisIcon" alt="" />
            </template>
          </BaseBtn>
        </span>
      </section>

      <div class="todos-container">
        <TodoItem v-for="n in 10" :key="n" />
      </div>
    </div>
    <section class="todo-layout empty-layout">
      <CreateTodoItem />
    </section>

    <div class="todo-layout" v-for="n in todos" :key="n">
      <section class="category">
        <span class="title"> To-do </span>
        <span class="flex items-center">
          <BaseBtn>
            <template #leftIcon>
              <img :src="AddIcon" alt="" />
            </template>
          </BaseBtn>

          <BaseBtn>
            <template #leftIcon>
              <img :src="ellipsisIcon" alt="" />
            </template>
          </BaseBtn>
        </span>
      </section>
      <div class="todos-container">
        <TodoItem v-for="n in 50" :key="n" />
      </div>
    </div>
    <section class="todo-layout empty-layout">
      <CreateTodoItem />
    </section>
  </section>
</template>

<style lang="scss" scoped>
.category {
  @apply bg-white rounded-tl-md rounded-tr-md py-2 px-1.5 mb-2.5 border-b-2 border-[#EFF0F1] relative flex items-center justify-between;
  &::before {
    @apply rounded-tl-md absolute block h-9 w-9;
    content: '';
    background-color: #4339f2;
    // background-color: #4db24d;
    clip-path: polygon(46% 0, 0 0, 0 46%);
  }

  .title {
    @apply pl-6 text-base font-semibold capitalize;
    line-height: 22.4px;
  }
}

.todos-container {
  @apply w-full bg-blue-500 h-full overflow-y-scroll;
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
}
</style>
