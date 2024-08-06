<template>
  <div>
    <NavBar />
    <UserProfile />
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
import NavBar from '../components/NavBar.vue'

export default {
  components: {
    UserProfile,
    NavBar
  }
}
</script>
