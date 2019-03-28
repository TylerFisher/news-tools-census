<template>
  <div class="c-check-field">
      <input type="radio" :name="uid" :id="uid" class="c-check-field__input" />
      <label :for="uid" class="c-check-field__decor" aria-hidden="true" role="presentation"></label>
      <label :for="uid" class="c-check-field__label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: ['uid', 'label'],
};
</script>
