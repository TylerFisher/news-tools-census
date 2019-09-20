<template>
  <div id="intro">
    <h1>News tools census</h1>
    <p><a href="/">News Catalyst</a> is looking to understand what third-party software news professionals use to perform their jobs and how well that software works.</p>
    <p>Your feedback will help us begin our research. We plan to share our research with the public, but any data we release from this survey will be anonymized and aggregated. We appreciate you taking this brief survey.</p>
    <p>With this knowledge, we will begin to identify the gaps in the industry for tooling and work to find solutions to those problems. We will also begin to identify tools we will offer through PressPass, our in-development single sign-on service for news tools.</p>
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
    padding: 0 15px;

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
