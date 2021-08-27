<template>
  <div class="title white-text font-thin italic text-current cursor-crosshair">
    &#60;/<span class="text-primary-color">Suveer</span>/&#62;
  </div>
  <ThemeButton class="toggleTheme" />
  <!-- <div id="nav">
    <router-link tag="btn" to="/">Home</router-link>
  </div> -->
  <router-view />
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue"
const ThemeButton = defineAsyncComponent(
  () => import("./components/themeButton.vue")
)

export default defineComponent({
  name: "App",
  components: { ThemeButton },
  mounted() {
    this.$store.dispatch("DataManager/FetchJsonData")
  },
  methods: {
    test() {
      console.log(this.$store.getters["DataManager/allColors"])
    },
  },
})
</script>

<style lang="scss">
/* Define styles for the default root window element */
:root {
  --background-color-primary: #ebebeb;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #222;
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
  --background-color-primary: #1e1e1e;
  --background-color-secondary: #2d2d30;
  --accent-color: #3f3f3f;
  --text-primary-color: #ddd;
}

#app {
  color: $color-dark;
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
      color: $color-primary;
    }
  }
}
.toggleTheme {
  position: absolute;
  top: 1.5em;
  right: 1.5em;
}

.title {
  font-size: 16px;
  float: left;
  position: fixed;
  top: 1.5em;
  left: 1.5em;
}
</style>
