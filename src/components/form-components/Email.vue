<template>
  <div class="c-form__row">
    <label class="c-label" :for="uid">{{ label }}</label>
    <input
      type="email"
      :name="uid"
      :id="uid"
      autocapitalize="none"
      autocorrect="off"
      class="c-input-field"
      placeholder="user@email.com"
      :value="value"
      @change="onChange"
    />
  </div>
</template>

<script>
export default {
  name: 'Email',
  props: ['uid', 'label', 'value', 'changeMethod'],
  methods: {
    onChange(e) {
      this.changeMethod(e.target.value);
    }
  }
};
</script>
