<template>
  <div id="app">
    <Header />
    <Intro />
    <Form />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Intro from './components/Intro.vue';
import Form from './components/Form.vue';

export default {
  name: 'app',
  components: {
    Header,
    Intro,
    Form,
  },
};
</script>

<style lang="scss">
#app {
}
</style>
