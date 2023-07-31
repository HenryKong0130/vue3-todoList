<template>
  <span style="display:block">countRef:{{ countRef }}</span>
  <button @click="increase">+</button>
  <button @click="decrease">-</button>
</template>

<script>
import { ref } from "vue";
function doSomething() {
  let countRef = ref(0);
  const increase = () => {
    countRef.value++;
  };
  const decrease = () => {
    countRef.value--;
  };
  return {
    countRef,
    increase,
    decrease,
  };
}

export default {
  setup() {
    return {
      ...doSomething(),
    };
  },
};
</script>
