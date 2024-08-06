<template>
  <div class="profile">
    <h1>User Profile</h1>
    <transition name="slide">
      <p v-if="showContent">Este é o perfil do usuário.</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      showContent: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.showContent = true;
    }, 300);
  }
}
</script>

<style scoped>
.profile {
  text-align: center;
  padding: 2rem;
}
.slide-enter-active {
  transition: all 0.5s ease;
}
.slide-enter {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
