<script setup lang="ts">
import { DelayedRendering } from 'aurora-design-solution'

const delayList = Array.from({ length: 1000 }, (_, index) => ({ id: index, text: `Item: ${index}` }))
</script>

<template>
  <div class="g_box">
    <DelayedRendering :list="delayList" :slice-unit="10">
      <template #listItem="{ item }">
        <div>{{ item.text }}</div>
      </template>
    </DelayedRendering>
  </div>
</template>

<style scoped>
.g_box {
  height: 500px;
  overflow-y: auto;
  scroll-behavior: auto;
}
</style>
