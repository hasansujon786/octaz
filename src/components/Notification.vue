<template>
  <transition name="bounce">
    <div @mouseleave="hoverOut" @mouseover="hovering" class="notification" v-if="IsShown">
      <div class="notification__content">
        <button @click="hideNotification" class="notification__closeBtn">X</button>
        <h5 class="notification__title">{{ content.title }}</h5>
        <p class="notification__text">{{ content.text }}</p>
      </div>
    </div>
  </transition>
</template>
 
<script>
export default {
  name: 'Notification',
  data() {
    return {
      hoverState: false
    }
  },
  props: {
    IsShown: {
      type: Boolean,
      default: false,
    },
    content: {
      type: Object,
      default: () => ({
        title: 'Title',
        text: 'This is a sample text',
      })
    },
    time: {
      type: Number,
      default: 3000
    }
  },
  methods: {
    hideNotification() {
      this.$emit('changeIsShown')
    },
    hideNotificationAuto() {
      setTimeout(() => {
        if(!this.hoverState) {
          this.$emit('changeIsShown')
        }
      }, this.time)
    },
    hovering() {
      console.log('item is hovered')
      this.hoverState = true
    },
    hoverOut() {
      console.log('hover out')
      this.hoverState = false
      this.hideNotificationAuto()
    }
  },
  watch: {
    IsShown() {
      this.hideNotificationAuto()
    },
  }
}
</script>
 
<style lang="scss" scoped>
.notification {
  position: fixed;
  top: 6rem;
  // bottom: 5rem;
  right: 1rem;
  z-index: 2000;
  &__title {
    color: var(--light-4);
    font-size: 1.6rem;
    font-weight: normal;
    margin-bottom: .3rem;
    letter-spacing: .6px;
  }
  &__text {
    font-size: 1.4rem;
    color: var(--light-4);
    opacity: .7;
  }
  &__content {
    background: rgb(27, 27, 32);
    width: 42rem;
    border-radius: 4px;
    padding: 1rem 2rem;
    margin-bottom: 1rem;
  }
  &__closeBtn {
    color: currentColor;
    cursor: pointer;
    font-size: 1.5rem;
    width: 2rem;
    height: 2rem;
    float: right;
    background: transparent;
    border: none;
  }
}

.bounce-enter-active {
  animation: bounce-in .9s ease;
}
.bounce-leave-active {
  animation: bounce-in .9s reverse ease;
}
@keyframes bounce-in {
  0% {
    transform: translateX(42rem);
  }
  100% {
    transform: translateX(0);
  }
}
</style>