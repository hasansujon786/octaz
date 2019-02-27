<template>
    <div class="list-body">
      <div class="hidden" style="display: none">{{ getRandomNum }}</div>
      <div class="btn-control">
        <button @click="showInc = true" :class="{'active': showInc}">Incomes</button>
        <button @click="showInc = false" :class="{'active': !showInc}">Expanses</button>
      </div>

      <div class="lists" v-if="showInc">
        <div class="list list--inc" v-for="(item, i) in getAllIncomes" :key="i">
          <div class="list__contents u-pl">
            <span class="list__description">{{ item.description }}</span>
            <!-- <span class="list__percentage">{{ calcPercentage(item.value) }}</span> -->
          </div>

          <div class="list__tray">
            <div class="list__budget list__budget--inc">- {{ formatNumber(item.value) }}</div>
            <div class="list__actions">
              <button class="list__delBtn flex-center" @click="deleteListItem(item, i)">
                <i class="icon-arrows-remove flex-center"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="lists" v-if="!showInc">
        <div class="list list--exp" v-for="(item, i) in getAllExpanse" :key="i">
          <div class="list__contents u-pl">
            <span class="list__description">{{ item.description }}</span>
            <span class="list__percentage">{{ calcPercentage(item.value) }}</span>
          </div>

          <div class="list__tray">
            <div class="list__budget list__budget--exp">- {{ formatNumber(item.value) }}</div>
            <div class="list__actions">
              <button class="list__delBtn flex-center" @click="deleteListItem(item, i)">
                <i class="icon-arrows-remove flex-center"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { formatNum } from '@/mixins.js'

export default {
  name: 'List',
  data() {
    return {
      showInc: true,
    }
  },
  props: ['year', 'month', 'totalInc'],
  mixins: [formatNum],
  methods: {
    deleteListItem(item, i) {
      this.$store.dispatch('delListItemByType', {
        year: this.year,
        month: this.month,
        item,
        i
      })
    },
  },
  computed: {
    ...mapGetters(['getRandomNum']),
    getAllIncomes() {
      return this.$store.getters.getAllIncomes(this.year, this.month)
    },
    getAllExpanse() {
      return this.$store.getters.getAllExpanse(this.year, this.month)
    },
    calcPercentage() {
      return exp => {
        if(this.totalInc > 0) {
          return Math.round((exp / this.totalInc) * 100) + '%'
        } else {
          return '---'
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.list-body {
  padding: 2rem;
  background: var(--light-2);
  flex: 0 0 35%;
  overflow-y: scroll;
}
.list {
  font-size: 2rem;
  background: var(--white);
  border-radius: var(--global-radios);
  padding: 1rem 2rem;
  box-shadow: var(--obj-shadow);
  width: 100%;
  margin-bottom: .7rem;
  position: relative;
  overflow: hidden;
  // &__budget { } 
  // &__actions { } 

  &__budget--inc { color: var(--primary); }
  &__budget--exp { color: var(--secondary); }
  &__percentage { font-size: 1.3rem; }

  &__contents {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__delBtn {
    color: var(--secondary);
    font-size: 4rem;
    border: none;
    background: none;
    cursor: pointer;
    margin-left: 2rem;
    height: 3rem;
    width: 3rem;
    border-radius: var(--global-radios);
    &:hover { background: var(--light-3); }
  }

  &__tray {
    transform: translateX(5rem);
    transition: all .5s;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    float: right;
  }

  &:hover > &__tray { transform: translateX(0); }
}


.btn-control {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  button {
    width: 48%;
    border-radius: var(--global-radios);
    font-size: var(--btn-text);
    font-family: var(--font-family);
    color: currentColor;
    height: 5rem;
    border: none;
    padding: 0;
    transition: all .2s ease-in;
    background: var(--light-2);
    cursor: pointer;
  }

  button:hover {
    background: var(--white);
    box-shadow: var(--obj-shadow);
  }

  .active {
    background: var(--white);
    box-shadow: var(--obj-shadow);
  }
}
</style>