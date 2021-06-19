<template>
  <div class="content">
    <h2>Отправить данные</h2>
    <form action="">
      <div class="form-group">
        <label for="top_pressure">Верхнее давление</label>
        <input type="number" id="top_pressure" min="0" max="300" v-model="form.top_pressure">
      </div>
      <div class="form-group">
        <label for="bottom_pressure">Нижнее давление</label>
        <input type="number" id="bottom_pressure" min="0" max="300" v-model="form.bottom_pressure">
      </div>
      <div class="form-group">
        <label for="pulse">Пульс</label>
        <input type="number" id="pulse" min="0" max="300" v-model="form.pulse">
      </div>

      <div class="buttons">
        <button @click="sendData" :disabled="buttonDisabled">Отправить</button>
      </div>

    </form>
  </div>
</template>

<script>
import common from "@/mixins/common";
import axios from 'axios';

export default {
  name: "Checkout",
  mixins: [common],
  data() {
    return {
      form: {
        top_pressure: null,
        bottom_pressure: null,
        pulse: null,
      }
    }
  },
  computed: {
    buttonDisabled() {
      return !this.form.top_pressure || !this.form.bottom_pressure || !this.form.pulse;
    }
  },
  methods: {
    async sendData(event) {
      event.preventDefault();

      const {data} = await axios.post(this.env.VUE_APP_API_HOST + '/api/observations/create');

      if (data) {
        await this.$router.push({name: 'CheckoutCompleted'});
      }
    }
  }
}
</script>

<style scoped>

</style>