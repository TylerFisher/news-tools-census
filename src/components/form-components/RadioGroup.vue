<template>
  <div class="c-form__row">
    <label class="c-label">{{ question }}</label>
    <div class="c-check-field c-check-field--radio" v-for="option in options">
      <input
        type="radio"
        :name="groupName"
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
          :name="groupName"
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
  name: 'RadioGroup',
  props: ['question', 'options', 'groupName', 'storeValue', 'changeMethod', 'otherValue', 'otherChangeMethod'],
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
