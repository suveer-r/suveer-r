<template>
  <suv class="white-text font-thin italic text-current cursor-crosshair"
    >&#60;<span class="text-primary-color">Suveer</span>/&#62;</suv
  >
  <!-- <div id="nav">
    <router-link tag="btn" to="/">Home</router-link>
  </div> -->
  <router-view />
</template>

<style lang="scss">
#app {
  color: $dark;
}

#nav {
  top: 1em;
  padding: 30px 0;
  position: fixed;
  width: 100%;

  a {
    font-weight: bold;
    color: #999;

    &.router-link-exact-active {
      color: $primary-color;
    }
  }
}

suv {
  font-family: "JetBrainsMono", monospace;
  // font-style: italic;
  color: $light;
  font-size: 14px;
  float: left;
  position: fixed;
  top: 1em;
  left: 1em;
}
</style>
