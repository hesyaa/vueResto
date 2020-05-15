<template>
  <div>
    <div class="container">
      <br />
      <div class="cover">
      <h1 class="text-center">Costumer who have ordered</h1>
      <br />
      <input type="text" class="form-control" v-model="search" placeholder="search name here"><br>
      <div id="order" v-for="order in filteruser">
        <h4 class="text-left">name: {{order.name | to-uppercase}}</h4>
        <p class="text-left">address {{order.address.city}}</p>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
      search: ''
    };
  },
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function(data) {
        this.orders = data.body.slice(0, 5);
      });
  },
  filters: {
    toUppercase(value){
      return value.toUpperCase();
    }
  },
  computed: {
    filteruser: function(){
          return this.orders.filter((order)=>{
          return order.name.match(this.search)  
          })
      }
  }
};
</script>

<style scoped>
#order {
  max-width: 60%;
  border: 1px solid lightgray;
  margin: 10px auto;
  padding: 30px;
}

.form-control {
 margin: 10px auto;
 max-width: 60%;
}

input[type=text]{
    background-color: rgb(252, 249, 249);
}

h1 {
  font-size: 30px;
}

.cover {
  padding-top: 4em;
  padding-bottom: 2em;
}

@media only screen and (min-width: 650px){
  h1 {
    font-size: 2.5em;
  }
}
</style>