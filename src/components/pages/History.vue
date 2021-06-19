<template>
  <div class="content">
    <h2>История назначений</h2>
    <div class="block" v-for="item in history" v-bind:key="item.id">
      <div class="header">
        <div class="user">{{ item }}</div>
        <div class="date">{{ item.created_at }}</div>
      </div>
      <div class="message"><b>{{ item.drug }}</b>: {{ item.drug_meta }}</div>
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
      const {data} = await axios.get(this.env.VUE_APP_API_HOST + '/api/history', {
        params: {
          page: 1,
          per_page: 100
        }
      });

      if (data) {
        this.history = data.items;
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