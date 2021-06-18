<template>
  <div class="content">
    <h2>Мои данные</h2>
    <div class="myself">
      <p>Проблемный Пациент, 28 лет</p>
      <p>Под наблюдением с: 01.01.2001</p>
      <p>Оценка состояния: стабильное</p>
    </div>
    <h2>Показатели</h2>
    <div class="chart" v-if="dataCollection">
      <line-chart :chart-data="dataCollection"></line-chart>
    </div>
  </div>
</template>

<script>
import LineChart from "@/components/charts/LineChart";

export default {
  name: "Profile",
  components: {LineChart},
  data() {
    return {
      dataCollection: null
    }
  },
  mounted() {
    this.fillData()
  },
  methods: {
    fillData() {
      this.dataCollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: 'Нижнее давление',
            backgroundColor: '#0baa25',
            data: [this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: 'Верхнее давление',
            backgroundColor: '#0e2497',
            data: [this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: 'Пульс',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
</script>

<style scoped>

</style>