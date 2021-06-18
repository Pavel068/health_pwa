<template>
  <div class="nav-bottom">
    <a href="">Политика конфиденциальности</a>
    <a href="">Пользовательское соглашение</a>
  </div>
</template>

<script>
export default {
  name: "Bottom"
}
</script>

<style scoped>
.nav-bottom {
  width: 95%;
  text-align: center;
  position: absolute;
  bottom: 5px;
  border-top: 1px solid #bebebe;
}

.nav-bottom > a {
  text-align: center;
  display: block;
  margin: 10px;
  color: #4a057b;
}
</style>