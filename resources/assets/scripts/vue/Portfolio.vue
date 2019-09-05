<template>
  <section class="portfolio" :style="{ background: `${background_color}`}">
    <div class="container">
      <div class="flex" :class="{ reverse: reverse }">
        <div class="screenshot">
          <img :src="screenshot">
        </div>
        <div class="content">
          <p v-html="text">Error</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Portfolio',
  props: ['reverse', 'background_color', 'text', 'screenshot'],
}
</script>

<style scoped>
  .flex {
    display: flex;
    margin: 0 -1rem;
  }

  .flex.reverse {
    flex-direction: row-reverse;
  }

  .flex .screenshot {
    width: 35%;
    margin: 0 1rem;
  }

  .flex .content {
    width: 65%;
    margin: 0 1rem;
  }
</style>