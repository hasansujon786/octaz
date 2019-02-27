<template>
  <div class="home">
    <nav class="navbar">
      <router-link to="/" class="brand">Octa.Z</router-link>
      <router-link class="button button--login" to="">Login</router-link>
      <router-link  class="button button--signup " to="">Singup</router-link>
    </nav>

    <div class="container">
      <div class="content">
        <h1 class="tittle">Octa.Z</h1>
        <h3 class="tittle__secondary">Super fast & easy way to <b>manage</b> your daily <b>Budget Activities</b>.</h3>
        <router-link to="/calender" class="button main button-primary">Go to calander</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      allData: '',
      inputData: ''
    }
  },
  methods: {},
  components: {}
}
</script>

<style lang="scss" scoped>
@import 'src/sass/abstract/_mixins.scss';

.home {
  height: 100vh;
}
.navbar {
  display: flex;
  align-items: center;
  padding: 0rem 3rem;

  .button {
    // margin-left: 2rem;
    font-size: 1.7rem;
    height: 100%;
    text-transform: capitalize;
    &--signup {
      border: 2px solid var(--primary);
      color: var(--primary);
      &:hover {
        background: var(--primary);
        color: var(--white);
      }
    }

    &--login {
      border: none;
      color: var(--primary);
    }
  }
  .brand {
    --link-color: var(--primary);
    --link-color-dark: var(--primary-dark);

    font-size: 4rem;
    margin-right: auto;
    text-decoration: none;
  }
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 1px solid #000;
  min-height: 75vh;
}
.tittle {
  font-size: 11rem;
  font-weight: normal;

  &__secondary {
    max-width: 70rem;
    text-align: center;
    margin-top: 3rem;

    @include respond(phone) {
      color: red;
      text-align: left;
    }
  }
}
.button-primary.main {
  // --primary: var(--secondary);
  margin-top: 6rem;
  margin-bottom: 2rem;
	transform: scale(1.2);
}
</style>
