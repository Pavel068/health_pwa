<template>
  <div class="content">
    <h2>Авторизация</h2>
    <form action="">
      <div class="form-group">
        <label for="insurance_number">СНИЛС</label>
        <input type="text" id="insurance_number" v-model="form.insurance_number">
      </div>
      <div class="form-group">
        <label for="password">Пароль</label>
        <input type="password" id="password" v-model="form.password">
      </div>

      <div class="buttons">
        <button @click="login">Войти</button>
      </div>

      <div class="error" v-if="error">Неверный СНИЛС или пароль</div>
    </form>
  </div>
</template>

<script>
import common from "@/mixins/common";
import axios from 'axios';
import Cookies from 'js-cookie';

export default {
  name: "Signin",
  mixins: [common],
  data() {
    return {
      form: {
        insurance_number: null,
        password: null
      },
      error: false
    }
  },
  methods: {
    async login(event) {
      event.preventDefault();
      this.error = false;

      const {data} = await axios.post(this.env.VUE_APP_API_HOST + '/api/auth/login', this.form);

      if (data) {
        Cookies.set('access_token', data.access_token);
        await this.$router.push({name: 'Home'});
      } else {
        this.error = true;
      }
    }
  }
}
</script>

<style scoped>
  .error {
    text-align: center;
    margin-top: 20px;
    color: #ff0000;
  }
</style>