<template>
  <div>
    <div class="header1 container-fluid">
    <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
      <a class="navbar-brand" href="#"><img src="../assets/roti.png" alt="">AyoJAJAN</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">
            <router-link to="/" exact>Home</router-link>
            <span class="sr-only">(current)</span>
          </a>
          <a class="nav-item nav-link" href="#"><router-link to="/about" exact>How to order</router-link></a>
          <a class="nav-item nav-link" href="#"><router-link to="/order" exact>Ordering</router-link></a>
        </div>
      </div>
    </nav>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    nav  {
       font-size: 1.3em;
       background-color: rgb(34, 32, 32) !important;
    }

    .navbar-nav a {
      text-decoration: none;
      color: gray;
    }

     a .nav-link .active {
      color:red;
    }

    .router-link-active {
      color: salmon !important;
    }

    .header1 {
      background-color: rgb(34, 32, 32) !important;
    }

</style>