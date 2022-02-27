<template>
  <div class="app-wrapper" :class="{ darkMode: darkMode }">
    <div class="toolbar">
      <div class="toggle">
        <input type="checkbox" v-model="darkMode" /> <label>Dark mode</label>
      </div>
    </div>
    <div class="app-content">
      <div class="top">
        <h1>Hemma</h1>
        <router-link to="/bedroom">Bedroom</router-link>
        <router-link to="/office">Office</router-link>
        <router-link to="/kitchen">Kitchen</router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function () {
    return {
      darkMode: false
    };
  },
  watch: {
    darkMode() {
      if (this.darkMode) {
        document.body.classList.add('darkMode');
      } else {
        document.body.classList.remove('darkMode');
      }
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&family=Overpass:wght@400;700;900&display=swap');

html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  background: #f7f7f5;
}

.app-wrapper {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.app-content {
  width: 70%;
  margin: auto;
}

.toolbar {
  width: 90%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

h1 {
  font-size: 8em;
  font-family: 'Overpass', sans-serif;
  margin-bottom: 0px;
  margin-top: 20px;
  color: #40ad63;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.darkMode,
.darkMode h1,
.darkMode h2 {
  background: #2c3e50;
  font-family: 'IM Fell English', sans-serif;
  color: #ffffff;
}

.darkMode h1 {
  font-size: 7em;
  color: #adf274;
  text-shadow: 4px 4px #ff4069;
}

.darkMode .product-price,
.darkMode .personal-shopper p {
  color: #adf274;
}

a, a:visited {
  margin-right: 30px;
  color: #ff4284;
  text-decoration: none;
  font-weight: bold;
  font-size: 24px;
}

.top {
  margin-bottom: 100px;
}

.product-image {
  width: 40%;
}

.product-image img {
  width: 100%;
  max-width: 400px;
  object-fit: contain;
}

.product-wrapper {
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
}

.product-description {
  padding: 0 20px;
  text-align: left;
  width: 60%;
}

h2 {
  font-family: 'Overpass', sans-serif;
  font-weight: 900;
  color: #40ad63;
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
  color: #2c7842;
}

.product-price span {
  font-size: 24px;
  color: #40ad63;
  margin-right: 15px;
}

.personal-shopper {
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.personal-shopper img {
  width: 300px;
}

.personal-shopper p {
  text-align: right;
  font-size: 40px;
  font-style: italic;
  margin-right: 30px;
  color: #757458;
}

</style>
