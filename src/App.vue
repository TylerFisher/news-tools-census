<template>
  <div id="app">
    <Intro />
    <Form />
  </div>
</template>

<script>
import Intro from './components/Intro.vue';
import Form from './components/Form.vue';

export default {
  name: 'app',
  components: {
    Intro,
    Form,
  },
};
</script>

<style lang="scss">
#app {
}
</style>
