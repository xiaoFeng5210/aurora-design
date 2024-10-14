<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

interface ListItemType {
  id: string | number
  [key: string]: any
}

const { maxCount = 1000, sliceUnit = 1, list } = defineProps<{
  list: ListItemType[]
  maxCount?: number
  sliceUnit?: number
}>()

defineSlots<{
  listItem: (props: { item: any, index: number }) => void
}>()

const frameCount = ref(0)
let rafId: number | null = null

onMounted(() => {
  rafId = requestAnimationFrame(update)
})

onUnmounted(() => {
  if (rafId !== null) {
    cancelAnimationFrame(rafId)
    rafId = null
  }
})

function update() {
  frameCount.value += sliceUnit >= maxCount ? maxCount : sliceUnit
  if (frameCount.value < maxCount) {
    rafId = requestAnimationFrame(update)
  }
}
</script>

<template>
  <div class="render_delay_layout">
    <div v-for="(item, index) in list" :key="item.id" class="list_layout">
      <slot v-if="index <= frameCount" name="listItem" :item="item" :index="index" />
    </div>
  </div>
</template>

<style scoped>
.render_delay_layout {
height: auto;
}
</style>
