<template>
  <div class="budget-app">
    <div class="left">
      <app-head :budget="budget" :id="id" :year="year"></app-head>

      <section class="form__body">
        <form class="form" :class="{'change-color': type ===  'exp'}" @submit.prevent="calculate">
          <div class="form__value u-mb-sm">
            <input ref="desc" class="form__input-value" v-model.number="value" type="number" step="1" />
            <div class="btn-control">
              <btn-radio :text="'Income'" class="btn-control__01">
                <input class="radio__input" type="radio" v-model="type" value="inc" id="Income">
              </btn-radio>
              <btn-radio :text="'Expanse'">
                <input class="radio__input" type="radio" v-model="type" value="exp" id="Expanse">
              </btn-radio>
            </div>
          </div>

          <input type="text" class="form__description u-fw u-mb-sm" placeholder="Description" v-model="description" >
          <p class="link-btn u-pl" @click="$router.push({name: 'backup'})">Add description</p>
          <button class="form__btn button-primary button u-pr">Get val</button>
        </form> <!-- form end -->
      </section>
    </div>

    <app-list :totalInc="budget.total.inc" :year="year" :month="id"></app-list>
    <app-notification @changeIsShown="notific = false" :IsShown="notific"></app-notification>
  </div>
</template>

<script>
import ListVue from './List.vue'
import headVue from './head.vue'
import radioVue from './radio.vue'

export default {
  name: 'BudgetApp',
  data() {
    return {
      year: this.$route.params.year,
      id: this.$route.params.id, // this is the index of month
      description: '',
      value: 0,
      type: 'inc',
      notific: false
    }
  },
  methods: {
    calculate() {
      if (this.description !== '' && this.value > 0) {
        const newBudget = {
          description: this.description,
          value: this.value,
          type: this.type
        }
        this.$store.dispatch('addNewBudget', {
          newBudget,
          month: this.id,
          year: this.year
        })

        this.clearData()
      }
    },
    clearData() {
      this.$refs.desc.focus()
      this.description = ''
      this.value = 0
    },
    startBudget(year, month) {
      // Open a new Budget of curren month & year While this comp created
      this.$store.dispatch('setNewBudget', { month, year })
    }
  },
  mounted() {
    this.startBudget(this.year, this.id)
    setTimeout(() => {
      if( this.budget.all.inc <= 0 && this.budget.all.exp <= 0 ) {
        this.notific = true
      }
    }, 1000)
  },
  computed: {
    budget() {
      return this.$store.getters.getFullBudget({
        year: this.year,
        month: this.id
      })
    }
  },
  components: {
    appList: ListVue,
    appHead: headVue,
    btnRadio: radioVue
  },
}
</script>

<style lang="scss" scoped>
.budget-app {
  display: flex;
  height: 100%;
  max-height: 100%;
}
.left {
  flex: 0 0 65%;
  border-right: var(--side-border);
}
.change-color {
  --primary: var(--secondary);
  --primary-dark: var(--secondary-dark);
}
.form {
  padding: 1.5rem;
  width: 50rem;
  margin: 0 auto;
  &__body {
    margin-top: 10rem;
  }
  &__value {
    display: flex;
    // align-items: flex-end;
    align-items: center;
    justify-content: space-between;
  }
  &__input-value {
    font-size: 3rem;
    width: 18rem;
    height: 4.5rem;
  }
  // &__description { }

  // &__range { width: 100%; }

  &__controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.btn-control {
  display: flex;
  align-items: flex-end;
  &__01 {
    margin-right: 2rem;
    // margin: 0;
  }
}
</style>
