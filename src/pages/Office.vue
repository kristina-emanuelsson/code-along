<template>
  <div class="product-wrapper">
    <div class="product-image">
      <img src="./../assets/desk.jpeg">
    </div>
    <div class="product-description">
      <h2>JOBBIG</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum turpis
        justo, bibendum vehicula nisl vitae, pharetra ultrices arcu. Nullam vel
        pharetra diam. Nulla mattis turpis justo, vel consequat tortor molestie
        quis. Etiam convallis ornare justo, nec dapibus leo pellentesque eget.
        Integer sed vulputate ex. Vestibulum eu justo et massa varius laoreet nec
        eget dui.
      </p>
      <div class="product-price">
        <span>Only</span>57 999 €
      </div>
      <div class="personal-shopper">
        <p>"What a great piece! Everyone needs a JOBBIG!"</p>
        <img :src="getImg('happy_guy.png')">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Office',
  data: function () {
    return {
    };
  },
  props: {
    darkMode: Boolean
  },
  methods: {
    getImg(img) {
      return require('./../assets/' + img);
    }
  }
};
</script>

<style scoped>
</style>
