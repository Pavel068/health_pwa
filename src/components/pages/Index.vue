<template>
  <div class="content">
    <h2>Добро пожаловать!</h2>
    <div class="text-blocks">
      <p>Приложение предназначено для фиксации показателей состояния пульса и давления для последующего мониторинга и коррекции лечения врачем. </p>
      <p>Не забудьте включить напоминания о необходимости произвести замер давления - это позволит врачу иметь актуальные данные о состоянии Вашего здоровья. </p>
    </div>
    <br/>
    <div class="buttons">
      <router-link v-if="!isAuth" :to="{name: 'Signin'}">Войти в систему</router-link>
      <router-link v-if="isAuth" :to="{name: 'Checkout'}">Отправить данные</router-link>
    </div>
  </div>
</template>

<script>
import common from "@/mixins/common";

export default {
  name: "Index",
  mixins: [common]
}
</script>

<style scoped>
.text-blocks > p {
  text-align: justify;
}
</style>