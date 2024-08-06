<template>
  <div>
    <NavBar />
    <Home />
  </div>
</template>

<script>
import Home from '../components/HomePrincipal.vue'
import NavBar from '../components/NavBar.vue'

export default {
  components: {
    Home,
    NavBar
  }
}
</script>
