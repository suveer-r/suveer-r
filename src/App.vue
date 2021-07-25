<template>
  <suv class="white-text">Suveer</suv>
  <!-- <div id="nav">
    <router-link tag="btn" to="/">Home</router-link>
  </div> -->
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: "Montserrat-Regular", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
  font-family: "GreatVibes", cursive;
  color: $light;
  font-size: 32px;
  float: left;
  position: fixed;
  top: 1em;
  left: 1em;
}
</style>
