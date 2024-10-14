<script setup lang="ts">
const { fillColor = '#2a80eb', type = 'long' } = defineProps<{
  fillColor?: string
  type?: 'short' | 'long'
}>()
</script>

<template>
  <svg
    v-show="type === 'short'"
    viewBox="0 0 1024 1024" data-icon="loading" width="1em" height="1em" fill="currentColor"
    aria-hidden="true" focusable="false" class="loading_icon_box"
  >
    <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" :fill="fillColor" />
  </svg>

  <svg v-show="type === 'long'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1em" height="1em" class="loading_icon_box">
    <path d="M512 1024q-104 0-199-40-92-39-163-110T40 711Q0 616 0 512q0-15 10.5-25.5T36 476t25.5 10.5T72 512q0 90 35 171 33 79 94 140t140 95q81 34 171 34t171-35q79-33 140-94t95-140q34-81 34-171t-35-171q-33-79-94-140t-140-95q-81-34-171-34-15 0-25.5-10.5T476 36t10.5-25.5T512 0q104 0 199 40 92 39 163 110t110 163q40 95 40 199t-40 199q-39 92-110 163T711 984q-95 40-199 40z" :fill="fillColor" />
  </svg>
</template>

<style scoped>
.loading_icon_box {
  animation: loading_animate 1s linear infinite;
  display: inline-block;
  vertical-align: -.125em;
}

@keyframes loading_animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }

}
</style>
