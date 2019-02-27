<template>
  <div>
    <app-navbar></app-navbar>
    <div class="container">
      <div class="years">
        <div class="years__year">{{ year }}</div>
        <div class="button-control">
          <button class="btn-sq btn-sq--minus" @click="year--">^</button>
          <button class="btn-sq btn-sq--plus" :disabled="ifThisYear" @click="year++">^</button>
        </div>
      </div>

      <div class="calander">
        <div class="calander__month"
          :class="{'disabled': ifThisYear && thisMonth < i}" @click="goTo(i)"
          v-for="(month,i) in months" :key="month"
        >
          <div v-if="thisMonth === i && ifThisYear" class="notification-batch"></div>
          <div class="calander__text">
            <h5 class="calander__mName">{{ month }}</h5>

            <div v-if="thisMonth >= i"  class="u-tr calander__details">
              <h6>+300</h6>
              <h6>-300</h6>
              <h5 class="now">+3000</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: 'Calander',
  data() {
    return {
      year: 0,
      thisMonth: 0,
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
        'November',
        'December'
      ]
    }
  },
  methods: {
    goTo(i) {
      const date = new Date()
      if(this.year === date.getFullYear() && this.thisMonth < i) {
        return 
      } else {
        this.$router.push({
          name: 'budget-app',
          params: {
            id: i,
            year: this.year
          }
        })
      }
    }
  },
  computed: {
    ifThisYear() {
      const date = new Date()
      return this.year === date.getFullYear()
    },
  },
  created() {
    const date = new Date()
    this.year = date.getFullYear()
    this.thisMonth = date.getMonth()
  }
}
</script>
 
<style lang="scss" scoped>
.button-control {
  --disable-color: var(--primary-light);
  margin-left: 2rem;

  .btn-sq {
    background: transparent;
    border: none;
    width: 38px;
    font-size: 3.5rem;
    padding: 0;
    cursor: pointer;
    color: currentColor;

    &--plus {
      transform: rotate(180deg)
    }

    &:nth-of-type(2) {
      margin-left: 0.5rem;
    }

    &:disabled {
      color: var(--disable-color);
      cursor: default;
    }
  }
}
.years {
  color: var(--primary);
  margin-top: 5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &__year {
    font-size: 7rem;
    font-weight: 100;
  }
}
.calander {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  border: 1px solid var(--border-color);
  border-radius: var(--global-radios);

  &__month {
    padding: .5rem 1rem;
    border-radius: 0;
    position: relative;
    border: 1px solid var(--border-color);
    cursor: pointer;
  }

  &__mName { 
    font-weight: 400;
  }


  &__text {
    text-align: left;
    font-size: 1.8rem;
    font-weight: 100;

    h5.now {
      color: var(--primary-dark);
      // font-weight: normal;
    }
  }

  // &__details { }
}

.disabled {
  color: var(--disable-color);
  cursor: default;
}
.notification-batch {
  background: rgb(67, 240, 67);
  height: 1rem;
  width: 1rem;
  display: inline-block;
  border-radius: 100%;
  position: absolute;
  top: 1rem;
  right: 1rem;
}
</style>