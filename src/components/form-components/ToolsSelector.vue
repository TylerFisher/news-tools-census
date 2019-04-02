<template>
  <div class="tools-selector">
    <div class="c-form__row">
      <label class="c-label">
        To the best you know it, please list the software, other than your newsroom’s content management systems, that you regularly use in your job.
      </label>
      <multiselect
        v-model="toolsUsed"
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
      <multiselect v-model="mostImportantTool" :options="toolsUsed"></multiselect>
    </div>
    <div class="c-form__row">
      <p v-if="mostImportantTool">
        Regarding <strong>{{ mostImportantTool }}</strong>, please answer the following:
      </p>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'ToolsSelector',
  components: { Multiselect },
  data() {
    return {
      options: ['list', 'of', 'options'],
    };
  },
  computed: {
    toolsUsed: {
      get() {
        return this.$store.state.toolsUsed;
      },
      set(value) {
        this.updateToolsUsed(value);
      },
    },
    mostImportantTool: {
      get() {
        return this.$store.state.mostImportantTool;
      },
      set(value) {
        this.updateMostImportantTool(value);
      },
    },
  },
  methods: {
    addTag(newTag) {
      this.options.push(newTag);
      this.updateToolsUsed([...this.toolsUsed, newTag]);
    },
    ...mapMutations([
      'updateToolsUsed',
      'updateMostImportantTool',
    ]),
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss" scoped>
.multiselect {
  margin-top: 5px;
  font-family: 'Work Sans', sans-serif;
}
</style>
}
