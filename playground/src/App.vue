<script setup lang="ts">
import { DelayedRendering } from 'aurora-design-solution'
import { InlineLoading } from '../../output/aurora-design.esm'

const delayList = Array.from({ length: 1000 }, (_, index) => ({ id: index, text: `Item: ${index}` }))
</script>

<template>
  <div class="layout">
    <div class="g_box">
      <DelayedRendering :list="delayList" :slice-unit="10">
        <template #listItem="{ item }">
          <div>{{ item.text }}</div>
        </template>
      </DelayedRendering>
    </div>

    <div>
      <button>
        <InlineLoading fill-color="black" />
        测试loading
      </button>
    </div>
  </div>
</template>

<style scoped>
.layout {
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  button {
    font-size: 16px;
  }
}
.g_box {
  height: 500px;
  overflow-y: auto;
  scroll-behavior: auto;
}
</style>
