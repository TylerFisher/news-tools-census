<template>
  <div class="tools-selector">
    <div class="c-form__row">
      <label class="c-label">
        To the best you know it, please list the software, other than your newsroom’s content management systems, that you regularly use in your job.
      </label>
      <multiselect
        v-model="value"
        :options="options"
        :multiple="true"
        :taggable="true"
        @tag="addTag"
      ></multiselect>
    </div>
    <div class="c-form__row">
      <label class="c-label">
        Which of these is the most essential for getting your job done? If you have equally important software, please pick one.
      </label>
      <multiselect v-model="mostImportant" :options="value"></multiselect>
    </div>
    <div class="c-form__row">
      <p v-if="mostImportant">
        Regarding <strong>{{ mostImportant }}</strong>, please answer the following:
      </p>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
  name: 'ToolsSelector',
  components: { Multiselect },
  data() {
    return {
      mostImportant: null,
      value: [],
      options: ['list', 'of', 'options'],
    };
  },
  methods: {
    addTag(newTag) {
      this.options.push(newTag);
      this.value.push(newTag);
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
