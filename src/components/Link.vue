<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  text: {
    type: String
  },
  class: {
    type: String
  },
  style: {
    type: String,
    default: ''
  },
  func: {
    type: Function
  }
});

const originStyle = ref('');
const clickLink = function () {
  originStyle.value = 'pointer-events: none;';
  props.func;
}


onMounted(() => {
  window.addEventListener('pageshow', () => originStyle.value = '');
});

onUnmounted(() => {
  window.removeEventListener('pageshow', () => originStyle.value = '');
});
</script>

<template>
  <a :class="class" :style="`${originStyle} ${props.style}`" href="javascript:void(0)" @click="clickLink">
    {{ text }}
  </a>
</template>