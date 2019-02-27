<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      renderNav: true,
    }
  },
  components: {
  },
  methods: {
  }
};
</script>

<style lang="scss">
// .Navbar ~ .afternav { padding-top: 5rem; }


.link-btn {
  color: var(--primary-dark);
  cursor: pointer;
}


</style>
