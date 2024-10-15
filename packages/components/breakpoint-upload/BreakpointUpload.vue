<script setup lang="ts">
import { chooseFile } from './help'
</script>

<template>
  <form id="form" class="form">
    <input id="file" type="file" class="file" name="file[]" multiple @change="chooseFile">
    <span class="btn btn-info">请选择要上传的文件</span>
    <!--    <input id="submit" type="submit" class="btn btn-primary" value="上传"> -->
    <button class="btn btn-primary">
      上传
    </button>
  </form>
</template>

<style scoped>
@import "./btn.css";
</style>
