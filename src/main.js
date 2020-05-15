import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueResource from 'vue-resource'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.use(VueResource)
Vue.use(VueRouter)

// Vue.directive('red', {
//   bind: function(el, binding, vnode){
//     el.style.color="violet"
//   }
// });

// https://jsonplaceholder.typicode.com/posts

Vue.directive('theme', {
  bind(el, binding, vnode){
    if(binding.value == 'grey'){
      el.style.color ="lightgrey"
    }
  }
})


const router = new VueRouter({
   routes:Routes,
   mode:'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
