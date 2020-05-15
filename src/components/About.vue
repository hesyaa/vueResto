<template>
 <div>
   <div class="container about-pg">
   <h2>Step by step to order</h2><br>
   <!-- <p v-on:click="change">{{title}}</p> -->
   <ul class="list-group">
     <li class="list-group-item">Pilih menu yang ingin dipesan dari beranda</li>
     <li class="list-group-item">Masuk lalu isi form untuk pemesanan</li>
     <li class="list-group-item">jika berhasil lihat data dari menu ordering</li>
   </ul>
   </div>  
 </div>    
</template>

<script>
export default {
  props:['title'],
 data () {
  return {
  }
 },
 methods: {
   change: function(){
     this.$emit('change','wekky')
   }
 }
}
</script>

<style scoped>
 .about-pg {
   margin-top: 40px;
   padding: 2em;
 }

 p #hide {
  display: hidden;
 }

 li {
   font-size: 20px;
 }
</style>