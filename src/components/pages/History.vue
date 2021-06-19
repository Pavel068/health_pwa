<template>
  <div class="content">
    <h2>История назначений</h2>
    <div class="block">
      <div class="header">
        <div class="user">Иванов А.А.</div>
        <div class="date">01.01.2020</div>
      </div>
      <div class="message">Анальгин 1 таблетка 2 раза в сутки</div>
    </div>
    <div class="block">
      <div class="header">
        <div class="user">Иванов А.А.</div>
        <div class="date">01.01.2020</div>
      </div>
      <div class="message">Анальгин 1 таблетка 2 раза в сутки</div>
    </div>
    <div class="block">
      <div class="header">
        <div class="user">Иванов А.А.</div>
        <div class="date">01.01.2020</div>
      </div>
      <div class="message">Анальгин 1 таблетка 2 раза в сутки</div>
    </div>
  </div>
</template>

<script>
import common from "@/mixins/common";
import axios from 'axios';

export default {
  name: "Chat",
  mixins: [common],
  data() {
    return {
      history: null,
    }
  },
  methods: {
    async loadHistory() {
      const {data} = await axios.get(this.env.VUE_APP_API_HOST + '/api/history');
      if (data) {
        this.history = data;
      }
    }
  },
  async mounted() {
    await this.loadHistory();
  }
}
</script>

<style scoped>
  .block {
    background-color: #f5f5f5;
    padding: 5px 20px;
    border-radius: 5px;
  }
  
  .block:not(:nth-child(1)) {
    margin-top: 15px;
  }

  .block.out {
    text-align: right;
  }

  .block .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 12px;
  }

  .block .header .user {
    font-weight: bold;
  }

  .block .message {
    font-size: 20px;
  }

  .form-group-inline {
    position: fixed;
    bottom: 100px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
</style>