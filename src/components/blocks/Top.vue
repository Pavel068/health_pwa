<template>
  <div class="nav-top">
    <h1>
      <img src="img/heart.png" alt="Dr.House" class="logo">
      <span>Dr.House</span>
    </h1>
    <Slide right :closeOnNavigation="true" noOverlay>
      <span><router-link :to="{name: 'Home'}">Главная</router-link></span>
      <span><router-link :to="{name: 'Signin'}">Вход</router-link></span>
      <span><router-link :to="{name: 'Checkout'}">Отправить данные</router-link></span>
      <span><router-link :to="{name: 'Profile'}">Мои данные</router-link></span>
      <span><router-link :to="{name: 'History'}">История</router-link></span>
    </Slide>
  </div>
</template>

<script>
import {Slide} from 'vue-burger-menu';

export default {
  name: "Top",
  components: {Slide}
}
</script>

<style scoped>
  .nav-top {
    margin-top: 30px;
    border-bottom: 1px solid #bebebe;
  }

  a.router-link-exact-active {
    font-weight: bold;
  }

  a.router-link-exact-active::before {
    content: "\2661";
    margin-right: 5px;
  }

  .logo {
    width: 50px;
    margin-right: 10px;
  }
</style>