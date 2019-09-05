<template>
  <section class="hero" :style="{ background: `url('${background_image}')` }">
    <div class="container">
      <h1>{{title}}</h1>
      <p v-html="text_area">{{text_area}}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: ['background_image', 'title', 'text_area'],
}
</script>