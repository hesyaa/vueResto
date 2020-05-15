<template>
  <div class="body">
    <header>
      <div class="container">
        <h1 v-red>AyoJAJAN</h1>
        <h2 v-theme="'grey'">Jajanan Nikmat dan banyak rasa untuk semua</h2>
        <hr />
      </div>
    </header>
    <br />
    <div class="menu container">
      <h2 class="text-left text-dark">Promo on this weeks</h2>
      <br />
      <div class="row">
        <div class="col-md-6" v-for="food in foods">
          <div class="card text-center shadow-sm p-3 mb-5 bg-white rounded" style="" >
            <img class="card-img-top" src="../assets/mrtbk.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">{{food.name}}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p class="card-text text-bold"><strong>Rp. {{food.harga}} </strong></p>
              <a href="" class="btn btn-success"><router-link to="/form">Beli sekarang</router-link></a>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="bg3 container-fluid">
      <div class="place container">
       <h2>Our place here</h2>
       <div class="row">
         <div class="col-md-6">
           <img src="../assets/restaurant.jpg" alt="">
         </div>
         <div class="col-md-4 text">
          <h3 class="text-left text-bold">Jakarta</h3>
          <p class="text-left">Jln. hayam wuruk no.17 jakarta timur</p>
          <p class="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis 
          dolore ipsam iure est ullam architecto similique minus placeat unde 
          voluptas tenetur 
          rerum vel, accusamus voluptatem expedita in hic beatae vitae?</p>
         </div>
          <div class="col-md-6">
           <img src="../assets/restaurant.jpg" alt="">
         </div>
          <div class="col-md-4 text">
          <h3 class="text-left text-bold">Bandung</h3>
          <p class="text-left">Jln. margahayu no.14 bandung barat</p>
          <p class="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis 
          dolore ipsam iure est ullam architecto similique minus placeat unde 
          voluptas tenetur 
          rerum vel, accusamus voluptatem expedita in hic beatae vitae?</p>
         </div>
       </div>
      </div>
    </div>
    <div class="footer container-fluid">
            <h4>Visit</h4>
            <p>Bogor, 16820</p>
            <p>Indonesia</p>
            <hr>
            <h4>Contact</h4>
            <p>hesyaa29@gmail.com</p>
    </div>
    </div>
</template>
<script>
export default {
  props: ["foods"],
  data() {
    return {
     
    };
  },
  directives : {
    'red': {
      bind(el, binding, vnode){
        el.style.color = 'salmon'
      }
    }
  }
};
</script>
<style scoped>
.body {
  font-family: 'Montserrat', sans-serif;
}
header {
  background-color: rgb(34, 32, 32);
  height: 50vh;
  z-index: 5;
   padding: 2em 0;
   margin-bottom: 1em;
}
.place {
   padding: 4em 0;
   margin-bottom: 3em;
}

.place img {
  width: 400px;
  height: 350px;
  background-size: cover;
  margin: 10px auto;
}

.bg3 {
  background-color: rgb(248, 244, 244);
  width: 100%;
}

.place .text {
  margin: 10px auto;
  padding: 1em;
  font-size: 1.2em;
}

.place h2 {
  font-size: 40px;
  padding: 1.6em;
  color: rgb(36, 34, 34);
}

h1 {
  color: rgb(219, 212, 212);
  font-size: 3em;
}

.card {
    margin: auto;
}

h2 {
  font-size: 30px;
  color: rgb(219, 212, 212);
  padding: 10px;
}

.menu h5 {
  font-weight: bold;
  font-size: 1.3em;
}

a {
  color: white;
  text-decoration: none;
}

.menu h2 {
    font-weight: bold;
}

.footer {
  background-color: rgb(34, 32, 32);
  color: white;
  padding: 3em 0;
}

@media only screen and (min-width: 650px) {
     h1 {
         font-size: 4em;
    }
    .place h2 {
      font-size: 3.5em;
    }

    h2 {
      font-size: 2em;
    }
    header {
       padding: 3em 0;
       margin-bottom: 3em;
       height: 50vh;
    }
}

@media screen and (device-aspect-ratio: 40/71) {
   header {
       padding: 3em 0;
       margin-bottom: 3em;
       height: 30vh;
    }
}

@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3) {
   header {
       padding: 3em 0;
       margin-bottom: 3em;
       height: 30vh;
    }
}

@media screen and (device-aspect-ratio: 375/667) {
   header {
       padding: 3em 0;
       margin-bottom: 3em;
       height: 30vh;
    }
}

@media screen and (device-aspect-ratio: 3/4) {
   header {
       padding: 3em 0;
       margin-bottom: 3em;
       height: 30vh;
    }
}
</style>