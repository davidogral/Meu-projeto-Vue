<template>
  <div class="home">
    <h1>Home Page</h1>
    <p>Bem-vindo ao meu aplicativo Vue.js!</p>
    <transition name="fade">
      <img v-if="showImage" src="@/assets/logo.png" alt="Vue logo" />
    </transition>
  </div>
</template>

<script>
export default { 
  name: 'HomePrincipal',
  data() {
    return {
      showImage: false
    }
  },
  mounted() {
    this.showImage = true;
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}
img {
  width: 200px;
  margin-top: 20px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões antigas do Vue */ {
  opacity: 0;
}
</style>
