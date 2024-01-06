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
  },
  type: {
    type: String as () => "button" | "submit" | "reset" | undefined,
  }
});

const disabled = ref(false);
const clickButton = function(){
  disabled.value = true;
  props.func;
}

onMounted(() => {
  window.addEventListener('pageshow', () => disabled.value = false);
});

onUnmounted(() => {
  window.removeEventListener('pageshow', () => disabled.value = false);
});
</script>

<template>
  <button
    class="hello-button"
    :type="type"
    :class="class"
    :disabled="disabled"
    :style="style"
    @click="clickButton"
  >
    {{ text }}
  </button>
</template>