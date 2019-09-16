<template>
  <header>
    <a href="/">
      <img class="logo" src="../assets/logo.svg">
      <img class="wordmark" src="../assets/wordmark.svg">
    </a>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
  header {
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;

    img {
      width: auto;
      vertical-align: middle;
      height: 40px;

      &.logo {
        margin-right: 8px;
      }

      @media screen and (min-width: 768px) {
        height: 80px;

        &.logo {
          margin-right: 16px;
        }
      }
    }
  }
</style>
