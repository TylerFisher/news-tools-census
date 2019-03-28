<template>
  <div class="c-check-field c-check-field--radio">
      <input type="radio" :name="radioGroupName" :id="uid" class="c-check-field__input" />
      <label :for="uid" class="c-check-field__decor" aria-hidden="true" role="presentation"></label>
      <label :for="uid" class="c-check-field__label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'RadioButton',
  props: ['radioGroupName', 'uid', 'label'],
};
</script>
