<template>
  <div class="app-wrapper" :class="{ darkMode: darkMode }">
    <div class="toolbar">
      <div class="toggle">
        <input type="checkbox" v-model="darkMode" /> <label>Dark mode</label>
      </div>
    </div>
    <div class="app-content">
      <h1>HEMMA</h1>
      <Product :darkMode="darkMode" />
    </div>
  </div>
</template>

<script>
import Product from './components/Product.vue';

export default {
  name: 'App',
  components: {
    Product
  },
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
  font-weight: 900;
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

</style>
