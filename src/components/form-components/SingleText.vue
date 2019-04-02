<template>
  <div class="c-form__row">
    <label class="c-label" :for="uid">{{ label }}</label>
    <input
      type="text"
      :name="uid"
      :id="uid"
      class="c-input-field"
      :placeholder="placeholder"
      :value="value"
      @change="onChange"
    />
  </div>
</template>

<script>
export default {
  name: 'Single',
  props: ['label', 'uid', 'placeholder', 'value', 'changeMethod'],
  methods: {
    onChange(e) {
      this.changeMethod(e.target.value);
    },
  },
};
</script>
