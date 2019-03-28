<template>
  <div class="c-form__row">
    <label class="c-label" :for="uid">{{ label }}</label>
    <input type="text" :name="uid" :id="uid" class="c-input-field" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: "Single",
  props: ['label', 'uid', 'placeholder'],
};
</script>
