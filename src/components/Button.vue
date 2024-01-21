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
  },
  isDisabledButton: {
    type: Boolean,
    default: false
  }
});

const disabled = ref(false);
const isDisabledButton = ref(false);
const clickButton = function () {
  if (props.isDisabledButton) {
    isDisabledButton.value = true;
  }

  if (!disabled.value) {
    disabled.value = true;
    if(props.func !== undefined){
      props.func();
    }
  }
}

onMounted(() => {
  window.addEventListener('pageshow', () => disabled.value = false);
  window.addEventListener('pageshow', () => isDisabledButton.value = false);
});

onUnmounted(() => {
  window.removeEventListener('pageshow', () => disabled.value = false);
  window.removeEventListener('pageshow', () => isDisabledButton.value = false);
});
</script>

<template>
  <button :type="type" :class="class" :disabled="isDisabledButton" :style="style" @click="clickButton">
    {{ text }}
  </button>
</template>