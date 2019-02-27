<template>
  <div class="Navbar">
    <router-link to="/" class="brand">Octa.Z</router-link>

    <nav class="nav">
      <router-link class="navLink" to="/calender">Calender</router-link>
      <!-- hidden menu -->
      <div class="hidden-menu navLink"><button @focus="closeMenu" @blur="closeMenu" class="hidden-menu__icon"></button>
        <ul v-show="showMenu" class="hidden-menu__body">
          <div class="hidden-menu__arrow"></div>
          <li><router-link class="hidden-menu__link" to="/calender">Calender</router-link></li>
          <li><router-link class="hidden-menu__link" to="/calender">Calender</router-link></li>
          <hr>
          <li><router-link class="hidden-menu__link" to="/backup">Backup</router-link></li>
          <li><router-link class="hidden-menu__link" to="/backup">Backup</router-link></li>
          <hr>
          <li><router-link class="hidden-menu__link" to="/backup">Backup Data</router-link></li>
        </ul>
      </div>

    </nav>
  </div>
</template>
 
<script>

export default {
  name: 'Navbar',
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    closeMenu() {
      setTimeout(() => {
        this.showMenu = !this.showMenu
      }, 200)
    }
  },
  computed: {
  }
}
</script>
 
<style lang="scss" scoped>
.Navbar {
  // position: absolute;
  // top: 0;
  // left: 0;
  width: 100%;
  z-index: 1000;
  position: sticky;
  top: 0;
  background: var(--primary);
  box-shadow: var(--obj-shadow);
  padding: 0 3rem;
  height: 5rem;
  display: flex;
  align-items: center;
}

.nav {
  display: flex;
  align-items: center;
}

.hidden-menu {
  // background: rgb(240, 167, 167);
  position: relative;
  &:hover > .hidden-menu__body { display: block; }

  &__icon {
    cursor: pointer;
    -webkit-clip-path: polygon(48% 66%, 0 0, 100% 0);
    clip-path: polygon(48% 66%, 0 0, 100% 0);
    background: var(--nav-icon);
    width: 2rem;
    height: 2rem;
    border: none;
    &:focus { background: var(--white); }
  }

  &__body {
    padding: .8rem 0;
    list-style: none;
    background: var(--white);
    position: absolute;
    right: -1rem;
    top: 4.5rem;
    width: 20rem;
    box-shadow: var(--obj-shadow);
    border-radius: var(--global-radios);
  }

  li { margin: 0; }

  &__link {
    color: var(--font-color);
    width: 100%;
    display: inline-block;
    text-decoration: none;
    padding: 2px 1rem;
    &:hover {
      background: var(--primary);
      color: var(--white);
    }
  }

  &__arrow {
    -webkit-clip-path: polygon(49% 48%, 0% 100%, 100% 100%);
    clip-path: polygon(49% 48%, 0% 100%, 100% 100%);
    background: var(--white);
    width: 2rem;
    height: 3rem;
    position: absolute;
    top: -2.8rem;
    right: 1rem;
    z-index: -1;
  }

  hr {
    margin: .5rem auto;
    width: 94%;
  }
}

.brand {
  font-size: 3rem;
  font-weight: bold;
  margin-right: auto;
}

.brand,
.navLink {
  color: var(--white);
  text-decoration: none;
}

.navLink { margin-left: 2rem; }
</style>



