<template>
  <div class="content">
    <h2>Авторизация</h2>
    <form action="">
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="text" id="email">
      </div>
      <div class="form-group">
        <label for="password">Пароль</label>
        <input type="password" id="password">
      </div>

      <div class="buttons">
        <button>Войти</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Signin"
}
</script>

<style scoped>

</style>