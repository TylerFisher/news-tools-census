<template>
  <div class="c-form__row">
    <label class="c-label">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "RadioGroup",
  props: ['label'],
};
</script>
