<template>
  <div class="head">
    <div class="hidden" style="display: none">{{ getRandomNum }}</div>
    <div>
      <div class="main-budget">
        <h4 class="head-tittle u-mb-sm">{{ months[id] }}, {{ year }}</h4>
        <h1 class="main-budget__budget">{{ formatNumber(budget.now, 'now') }}</h1>
      </div>
    </div>

    <div class="label-holder">
      <div class="money-label money-label--inc">
        <span class="money-label__text">Income</span>
        <span class="money-label__budget">+ {{ formatNumber(budget.total.inc) }}</span>
      </div>
  
      <div class="money-label money-label--exp">
        <span class="money-label__text">Expanse</span>
        <small>{{ calcPercentage }}</small>
        <span class="money-label__budget">- {{ formatNumber(budget.total.exp) }}</span>
      </div>
    </div>

  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { formatNum } from '@/mixins.js'

export default {
  name: 'Head',
  data() {
    return {
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'Novermber',
        'December'
      ]
    }
  },
  props: ['year', 'id', 'budget'],
  methods: {},
  mixins: [formatNum],
  computed: {
    ...mapGetters(['getRandomNum']),
    calcPercentage() {
      if(this.budget.total.inc > 0) {
        return Math.round((this.budget.total.exp / this.budget.total.inc) * 100) + '%'
      } else {
        return '---'
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.head {
  padding: 5rem 3rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  background-image: url(../../assets/bg-night.jpg);
  background-position: center;
  color: var(--white);
}
.main-budget {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__budget {
    font-size: 6rem;
    font-weight: 400;
  }
}
.money-label {
  border-radius: var(--global-radios);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 30rem;
  font-size: var(--btn-text);

  &:first-child {
    margin-bottom: 2rem;
    background: var(--primary);
  }
  &:last-child { background: var(--secondary)} 
}
.circle {
  color: var(--font-color);
  border: .5rem solid deepskyblue;
  border: .5rem solid var(--proto);
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
  flex-direction: column;

  &--big {
    width: 20rem;
    height: 20rem;
  }
}
</style>