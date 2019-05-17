<template>
  <div id="intro">
    <h1>Newsroom tools census</h1>
    <p>We’re a group funded by the Knight Foundation, the Lenfest Institute for Journalism and Facebook looking to understand what third-party software news professionals use to perform their jobs and how well that software works.</p>
    <p>Your feedback will help us begin our research. We plan to share our research with the public, but any data we release from this survey will be anonymized and aggregated. We appreciate you taking this brief survey.</p>
  </div>
</template>

<script>
export default {
  name: 'Intro',
};
</script>

<style lang="scss" scoped>
  #intro {
    max-width: 600px;
    margin: 0 auto;

    h1 {
      font-family: 'Work Sans', sans-serif;
      text-align: center;
    }

    p {
      font-size: 20px;
      font-family: 'Work Sans', sans-serif;
      line-height: 1.5;
    }
  }
</style>
