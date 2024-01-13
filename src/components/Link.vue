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
    type: String
  },
  func: {
    type: Function
  }
});

const classDisabled = ref('');
const clickLink = function () {
  classDisabled.value = 'disabled';
  props.func;
}


onMounted(() => {
  window.addEventListener('pageshow', () => classDisabled.value = '');
});

onUnmounted(() => {
  window.removeEventListener('pageshow', () => classDisabled.value = '');
});
</script>

<template>
  <a :class="`${classDisabled} ${props.class}`" :style="style" href="javascript:void(0)" @click="clickLink">
    {{ text }}
  </a>
</template>

<style scoped>
.disabled {
  pointer-events: none;
}
</style>