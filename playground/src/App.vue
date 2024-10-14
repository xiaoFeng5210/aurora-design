<script setup lang="ts">
import DelayedRendering from '../../packages/components/delayed-rendering/DelayedRendering.vue'

const delayList = Array.from({ length: 1000 }, (_, index) => ({ id: index, text: `Item: ${index}` }))
</script>

<template>
  <div>
    <DelayedRendering :list="delayList">
      <template #listItem="{ item }">
        <div>{{ item.text }}</div>
      </template>
    </DelayedRendering>
  </div>
</template>

<style scoped>
</style>
