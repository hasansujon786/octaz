<template>
  <div class="Backup">
    <app-navbar></app-navbar>
    <div class="controls">
      <div class="">
        <h4>Import Data</h4>
        <textarea class="codeBox" v-model="inputData" type="text"></textarea>
        <p class="link-btn" @click="importNow">Import</p>
      </div>

      <div>
        <h4>Export Data</h4>
        <textarea class="codeBox codeBox--export" v-model="outputData" type="text"></textarea>
        <p class="u-mb-sm link-btn" @click="exportNow">Export</p>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'Backup',
  data() {
    return {
      allData: '',
      outputData: '',
      inputData: ''
    }
  },
  methods: {
    exportNow() {
      const data = this.$store.getters.getAllCalenderData
      this.allData = data
      this.outputData = JSON.stringify(data)
    },
    importNow() {
      if(this.inputData) {
        const data = JSON.parse(this.inputData) 
        this.$store.dispatch('addImportData', data)
        this.inputData = ''
      }
    }
  },
  computed: {
  },
  created() {
    this.exportNow()
  }
}
</script>

<style lang="scss" scoped>
$font-color: rgb(128, 128, 128) !default;
.Backup {
  min-height: 100vh;
}
.controls {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.codeBox {
  width: 90rem;
  min-height: 30rem;
  padding: 1rem 2rem;
  background: rgb(241, 241, 241);
  margin-bottom: 1rem;
  color: $font-color;
  // &--export {
  // }
    // "vue": "^2.6.3",
    // "vue-router": "^3.0.1",
    // "vuex": "^3.0.1",
    // "vuex-persist": "^2.0.0"
}
</style>