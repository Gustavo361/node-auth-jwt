<script setup>
import SignUp from './components/SignUp.vue'
</script>

<template>
  <div>
    <nav>
      <router-link to="/sign-up">sign up</router-link>
      <span> | </span>
      <router-link to="/log-in">login</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style scoped></style>
