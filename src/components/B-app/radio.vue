<template>
  <li class="radio">
    <!-- <input class="radio__input" type="radio" v-model="value" :value="text" :id="text"> -->
    <slot></slot>
    <label :for="text" class="radio__label">
      <div class="radio__check"></div>
      <span>{{ text }}</span>
    </label>
  </li>
</template>
 
<script>
export default {
  name: 'radio',
  data() {
    return {
    }
  },
  props: ['text'],
  methods: {},
  computed: {}
}
</script>
 
<style lang="scss" scoped>
.radio {
  list-style: none;
  margin: 0;

  &__body {
    border: 1px solid #fff;
    display: flex;
    align-items: center;
  }

  &__input { display: none; }

  &__label {
    cursor: pointer;
    color: var(--proto);
    display: flex;
    align-items: center;
    font-size: 2.2rem;
    font-size: var(--btn-text);
    span {
      margin-left: 1rem;
    }
    transition: var(--radio-transition);
  }

  &__check {
    width: 2.5rem;
    height: 2.5rem;
    border: 3px solid var(--proto);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--radio-transition);
    &::before {
      display: block;
      opacity: 0;
      transform: scale(0);
      content: '';
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background: #000;
      background: var(--primary);
      transition: var(--radio-transition);
    }
  }

  &__input:checked ~ &__label {
    color: var(--primary);
  }

  &__input:checked ~ &__label > &__check {
    border-color: var(--primary);
  }

  &__input:checked ~ &__label > &__check::before {
    opacity: 1;
    transform: scale(1);
  }
}
</style>