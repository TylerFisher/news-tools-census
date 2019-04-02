<template>
  <div class="c-form__row">
    <label class="c-label">{{ question }}</label>
    <div class="c-check-field" v-for="option in options">
      <input
        type="checkbox"
        :name="option.uid"
        :id="option.uid"
        class="c-check-field__input"
        v-model="storeSync"
        :value="option.label"
      />
      <label
        :for="option.uid"
        class="c-check-field__decor"
        aria-hidden="true"
        role="presentation"
      ></label>
      <label
        :for="option.uid"
        class="c-check-field__label"
      >
      {{ option.label }}
      <input
        v-if="option.label === 'Other'"
        type="text"
        :name="option.uid"
        :id="option.uid"
        class="c-input-field"
        placeholder="Please specify"
        v-model="otherSync"
      />
    </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckboxGroup',
  props: ['question', 'options', 'storeValue', 'changeMethod', 'otherValue', 'otherChangeMethod'],
  computed: {
    storeSync: {
      get() {
        return this.storeValue;
      },
      set(value) {
        this.changeMethod(value);
      },
    },
    otherSync: {
      get() {
        return this.otherValue;
      },
      set(value) {
        this.otherChangeMethod(value);
      },
    },
  },
};
</script>
