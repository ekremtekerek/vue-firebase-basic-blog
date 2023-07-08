<template>
  <NavBar/>
  <router-view/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
  export default {
    components: {
      NavBar,
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;800&display=swap');

  body {
    max-width: 1200px;
    margin: 20px auto;
    padding: 0 20px;
    font-family: 'Poppins', sans-serif;
    background: #dfe4ea;
  }

  p,h1,h2,h3,a,ul {
    margin:0;
    padding: 0;
    text-decoration: none;

  }

  h2 {
    margin-bottom: 40px;
  }

  h3 {
    margin-bottom: 8px;
    text-transform: capitalize;
  }


</style>
