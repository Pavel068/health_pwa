<template>
  <div class="content">
    <h2>Отправить данные</h2>
    <form action="">
      <div class="form-group">
        <label for="top_pressure">Верхнее давление</label>
        <input type="number" id="top_pressure" min="0" max="300">
      </div>
      <div class="form-group">
        <label for="bottom_pressure">Нижнее давление</label>
        <input type="number" id="bottom_pressure" min="0" max="300">
      </div>
      <div class="form-group">
        <label for="pulse">Пульс</label>
        <input type="number" id="pulse" min="0" max="300">
      </div>

      <div class="buttons">
        <button>Отправить</button>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  name: "Checkout"
}
</script>

<style scoped>

</style>