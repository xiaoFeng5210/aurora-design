<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

interface ListItemType {
  id: string | number
  [key: string]: any
}

const { maxCount = 1000, list } = defineProps<{
  maxCount?: number
  list: ListItemType[]
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
  frameCount.value += 1
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

}
</style>
