<template>
    <nav class="navbar">
      <router-link to="/">
        <img src="@/images/header.png" alt="FELDTED HQ" class="logo">
      </router-link>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    background-color: transparent; 
  }
  
  .logo {
    width: 40%;
    height: auto; 
    cursor: pointer;
    margin-top:0.72rem;

  }
  .logo:hover{
    transition: ease-in-out 0.3s;
  }
  </style>
  