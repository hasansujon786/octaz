<template>
  <div class="month">
    <app-navbar></app-navbar>
    <app-budgetapp></app-budgetapp>
  </div>
</template>
 
<script>
import BudgetAppVue from '@/components/B-app/Budget-app.vue'
export default {
  name: 'MonthlyView',
  data() {
    return {}
  },
  methods: {},
  computed: {},
  components: {
    appBudgetapp: BudgetAppVue
  }
}
</script>
 
<style lang="scss" scoped>
.month {
  height: 100vh;
  max-height: 100vh;
}
</style>