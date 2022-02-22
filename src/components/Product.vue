<template>
  <div class="hello">
    <div class="product-wrapper">
      <div class="product-image">
        <img src="../assets/armoire.jpeg">
      </div>
      <div class="product-description">
        <h2>ARMOIRE OF THE BEAST</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum turpis
          justo, bibendum vehicula nisl vitae, pharetra ultrices arcu. Nullam vel
          pharetra diam. Nulla mattis turpis justo, vel consequat tortor molestie
          quis. Etiam convallis ornare justo, nec dapibus leo pellentesque eget.
          Integer sed vulputate ex. Vestibulum eu justo et massa varius laoreet nec
          eget dui.
        </p>
        <div class="product-price">
          100 788 :-
        </div>
      </div>
    </div>

    <div class="personal-shopper">
      <img :src="personalShopper">
    </div>


    <div class="chart-wrapper"></div>
  </div>
</template>

<script>
export default {
  name: 'Product',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.product-wrapper {
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
}
.product-image {
  width: 40%;
}
.product-image img {
  width: 100%;
  object-fit: contain;
}
.product-description {
  padding: 0 20px;
  text-align: left;
  width: 60%;
}

h2 {
  font-family: 'Overpass', sans-serif;
  font-weight: 900;
}

p {
  font-family: 'Overpass', sans-serif;
  font-weight: 400;
}

.product-price {
  float: right;
  font-family: 'Overpass', sans-serif;
  font-weight: 900;
  font-size: 36px;
}

.personal-shopper {
  width: 30%;
  position: fixed;
  top: 50%;
  right: 20%;
}

.personal-shopper img {
  width: 100%;
  object-fit: fill;
}



</style>
