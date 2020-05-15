<template>
  <div>
    <div class="container pt-md-4">
      <div class="form" v-if="!submitted">
       <!-- <form id="app" @submit="checkForm">
        <p v-if="errors.length">
           <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
       </ul>
        </p> -->

        <div class="form-group text-left">
          <label for>name</label>
          <input type="text" name="name" id="validationDefault01" class="form-control" v-model.lazy="blog.name" autocomplete="off" required>
        </div>
        <div class="form-group text-left">
          <label for>no meja</label>
          <input type="text" name="alamat" class="form-control" autocomplete="off" required v-model.lazy="blog.number" />
        </div>
        <div class="form-group text-left">
          <label for="exampleFormControlSelect1">Pilih paket</label>
          <select class="form-control" id="exampleFormControlSelect1" v-model="blog.packet">
            <option v-for="packet in packets">{{packet}}</option>
          </select>
        </div>
        <div class="form-group text-left">
          <label for>Jumlah</label>
          <button v-on:click="plus">+</button>
          <button v-on:click="minus">-</button>
          <span>{{blog.value}}</span>
        </div>
        <button class="btn btn-success btn-block" v-on:click="post">Pesan</button>
         <!-- </form> -->
      </div>
      <br />
      <div class="preview">
        <h2 class="text-left text-success" v-if="submitted">Thanks for ordered</h2>
        <br />
        <p class="text-left">
          your name:
          <b>{{blog.name}}</b>
        </p>
        <p class="text-left">
          number of your table:
          <b>{{blog.number}}</b>
        </p>
        <p class="text-left">
          packet you selected:
          <b>{{blog.packet}}</b>
        </p>
        <p class="text-left">
          Total:
          <b>Rp. {{blog.price}}</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        name: "",
        number: "",
        packet: "",
        value: 1,
        price: 10000
      },
      packets: ["martabak telur", "martabak kacang", "martabak cokelat"],
      submitted: false,
      errors: []
    };
  },
  methods: {
    // checkForm: function (e) {
   
    // },
  post: function() {
  //     // this.$http.post("https://restaurantvue-59421.firebaseio.com/", this.blog).then(function(data) {
  //     //     console.log(data)
  const x = confirm('are you sure want to buy this');
    if(x == true){
     this.submitted = true
    }
  },  
   plus: function() {
      this.blog.value = this.blog.value + 1;
      this.blog.price = this.blog.price + 10000;
    },
    minus: function() {
      this.blog.value = this.blog.value - 1;
      this.blog.price = this.blog.price - 10000;
    }
  }
}
</script>

<style scoped>
.form {
  width: 60%;
  margin: auto;
  padding-top: 3em;
}

.preview {
  width: 50%;
  margin: auto;
  padding-bottom: 2em;
}

@media screen and (device-aspect-ratio: 40/71) {
 .form {
  width: 90%;
  margin: auto;
  padding-top: 3em;
}
}
</style>