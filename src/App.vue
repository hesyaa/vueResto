<template>
  <div id="app">
    <navbar-app></navbar-app>
    <router-view v-bind:foods="foods" v-on:change="update($event)" v-bind:title="title">
    </router-view>
  </div>
</template>

<script>
import Beranda from './components/Beranda'
import Navbar from './components/Navbar'
import About from './components/About'
export default {
  components: {
    'beranda-app':Beranda,
    'navbar-app':Navbar,
    'about-app':About
  },
  data() {
    return {
      value: "points",
      foods: [
        {name:'martabak manis', harga:10000},
        {name:'martabak telur', harga:10000},
        {name:'martabak kacang', harga:10000},
         {name:'martabak keju', harga:10000}
      ],
      title:'weeko'
    };
  },
  methods: {
    update: function(updated) {
      this.title = updated
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
