<template>
  <div class="content">
    <div class="content-center">
      <h2>Данные успешно отправлены!</h2>
      <p>Мы оповестим Вас, когда будет необходимо сделать очередной замер показателей.</p>
      <img src="img/completed.png" alt="" style="margin-top: 30px; width: 200px">
      <div class="buttons">
        <button style="margin-top: 50px;" @click="$router.push({name: 'Home'})">На главную</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutCompleted"
}
</script>

<style scoped>
  .content-center {
    text-align: center;
  }
</style>