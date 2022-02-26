<template>
  <div class="product-wrapper">
    <div class="product-image">
      <img src="../assets/lunchbox.png">
    </div>
    <div class="product-description">
      <h2>MATIG</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum turpis
        justo, bibendum vehicula nisl vitae, pharetra ultrices arcu. Nullam vel
        pharetra diam. Nulla mattis turpis justo, vel consequat tortor molestie
        quis. Etiam convallis ornare justo, nec dapibus leo pellentesque eget.
        Integer sed vulputate ex. Vestibulum eu justo et massa varius laoreet nec
        eget dui.
      </p>
      <div class="product-price">
        <span>Only</span>129 €
      </div>
      <div class="personal-shopper">
        <p>"What a great piece! Everyone needs a MATIG!"</p>
        <img src="./../assets/happy_guy.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Kitchen',
  data: function () {
    return {
    };
  },
  props: {
    darkMode: Boolean
  },
  computed: {
    personalShopper() {
      return this.darkMode ? '../assets/victorian-girl.png' : '../assets/hip-people.jpeg';
    }
  }
};
</script>

<style scoped>
</style>
