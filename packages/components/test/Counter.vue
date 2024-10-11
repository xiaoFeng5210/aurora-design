<template>
  <div class="counter">
    <p>This is a counter component</p>
    <h2>{{ title }}</h2>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
    
    const props = defineProps({
      title: {
        type: String,
        default: 'Counter'
      },
      initialCount: {
        type: Number,
        default: 0
      }
    })
    const count = ref(props.initialCount)

    const increment = () => {
      console.log('增加')
      count.value++
    }

    const decrement = () => {
      count.value--
    }

    const reset = () => {
      count.value = props.initialCount
    }

    const isEven = computed(() => count.value % 2 === 0)
</script>

<style scoped>
.counter {
  font-family: Arial, sans-serif;
  width: 300px;
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  margin: 0 5px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
}
</style>