<script setup lang="ts">
const { delay = 100, list } = defineProps<{
  delay?: number
  list: any[]
}>()
</script>

<template>
  <div class="render_delay_layout">
    <slot />
  </div>
</template>

<style scoped>
.render_delay_layout {

}
</style>
