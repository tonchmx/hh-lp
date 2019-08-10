<template>
  <header class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a href="/" class="navbar-item has-text-white">
          Trandx
        </a>

        <a
          role="button"
          class="navbar-burger burger has-text-white"
          aria-label="menu"
          aria-expanded="false"
          data-target="navContent"
          @click="toggleMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navContent" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item has-text-white">Home</a>
          <a class="navbar-item has-text-white">About</a>
          <a class="navbar-item has-text-white">Portfolio</a>
          <a class="navbar-item has-text-white">Contact</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    toggleMenu(event) {
      const currentTarget = event.target;
      const target = currentTarget.dataset.target;
      const targetWrapper = document.getElementById(target);

      currentTarget.classList.toggle('is-active');
      targetWrapper.classList.toggle('is-active');
    }
  }
}
</script>

<style lang="scss" scoped>
  nav {
    background-color: transparent;

    .navbar-item {
      background-color: transparent;
    }

    .navbar-menu.is-active {
      background-color: transparent;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
</style>


