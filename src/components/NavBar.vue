<template>
    <nav class="navbar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  
  <style scoped>
  .navbar {
    background-color: #42b983;
    padding: 1rem;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline;
    margin-right: 1rem;
  }
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  </style>
  