import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: localStorage
})

export default new Vuex.Store({
  state: {
    randomNum: 0,
    calender: {},
  },
  plugins: [vuexPersist.plugin],
  mutations: {
    set_New_Budget(state, payload) {
      /* Open a new Budget of current month & year */
      const db = {
        budget: {
          all: {
            inc: [],
            exp: []
          },
          total: {
            inc: 0,
            exp: 0
          },
          now: 0
        }
      }
      if (!state.calender.hasOwnProperty(payload.year)) {
        // add a obj with current year if it doesn't has one
        state.calender[payload.year] = {}
        console.log('new year obj added')
      }

      if (!state.calender[payload.year].hasOwnProperty(payload.month)) {
        // add a obj with current month if it doesn't has one
        state.calender[payload.year][payload.month] = db
        // console.log('new month obj added')
      } else {
        console.warn('not added month')
      }
    },
    Add_New_Budget(state, pl) {
      // add new budget to data
      const budget = state.calender[pl.year][pl.month].budget
      // state.calender[pl.year][pl.month].budget.all[pl.newBudget.type].push(pl.newBudget)
      budget.all[pl.newBudget.type].push(pl.newBudget)

      // increase/decrease the value of inc or exp by type
      budget.total[pl.newBudget.type] += pl.newBudget.value

      // set the amount of present money
      budget.now = budget.total.inc - budget.total.exp

      // for reactivity purpose
      state.randomNum = Math.random()
    },
    del_List_Item_By_type(state, pl) {
      const budget = state.calender[pl.year][pl.month].budget
      // del the selected list item
      budget.all[pl.item.type].splice(pl.i, 1)
      // set the amount of present money by type
      budget.total[pl.item.type] -= pl.item.value

      // set the amount of present money
      budget.now = budget.total.inc - budget.total.exp

      // for reactivity purpose
      state.randomNum = Math.random()
    },
    add_Import_Data(state, data) {
      // Import new Data & delete all the previous data
      state.calender = {}
      state.calender = data
      // console.log(data)
    },
  },
  actions: {
    setNewBudget({ commit }, payload) {
      commit('set_New_Budget', payload)
    },
    addNewBudget({ commit }, payload) {
      commit('Add_New_Budget', payload)
    },
    delListItemByType({ commit }, pl) {
      commit('del_List_Item_By_type', pl)
    },
    addImportData({ commit }, data) {
      commit('add_Import_Data', data)
    },
  },
  getters: {
    getFullBudget: state => ({year, month}) => {
      // Get the full budget of selected month & year
      if (state.calender.hasOwnProperty(year)) {
          console.log('has yar')
        if (state.calender[year].hasOwnProperty(month)) {
          console.log('has month')
          return state.calender[year][month].budget
        }
      }
    },
    getAllIncomes: state => (year, month) => {
      // Get all the Incomes of selected month & year
      return state.calender[year][month].budget.all.inc
    },
    getAllExpanse: state => (year, month) => {
      // Get all the Expanse of selected month & year
      return state.calender[year][month].budget.all.exp
    },
    getRandomNum(state) {
      return state.randomNum
    },
    getAllCalenderData(state) {
      // Get all the Calender data for Export
      return state.calender
    },
    getAllBudgetsOnCal: state => ({year, month}) => {
      // Get the full budget of selected month & year
      if (state.calender.hasOwnProperty(year)) {
        if (state.calender[year].hasOwnProperty(month)) {
          return state.calender[year][month].budget
        }
      }
    },
  }
})
