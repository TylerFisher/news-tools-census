<template>
  <div class="c-form__row">
    <label class="c-label" :for="uid">{{ label }}</label>
    <textarea :name="uid" :id="uid" class="c-input-field c-input-field--multiline" :placeholder="placeholder"></textarea>
  </div>
</template>

<script>
export default {
  name: "Paragraph",
  props: ['label', 'uid', 'placeholder'],
};
</script>
