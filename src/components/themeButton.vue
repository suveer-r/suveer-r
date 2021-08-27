<template>
  <div>
    <input
      @change="toggleTheme"
      id="checkbox"
      type="checkbox"
      class="switch-checkbox"
    />
    <label for="checkbox" class="switch-label">
      <span v-if="userTheme === 'light-theme'">🌑</span>
      <span v-else>☀️</span>
    </label>
  </div>
</template>

<script>
import { defineComponent } from "vue"
export default defineComponent({
  name: "ThemeButton",
  mounted() {
    const initUserTheme = this.getMediaPreference()
    this.setTheme(initUserTheme)
  },

  data() {
    return {
      userTheme: "dark-theme",
    }
  },

  methods: {
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme")
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme")
      } else {
        this.setTheme("light-theme")
      }
    },

    setTheme(theme) {
      localStorage.setItem("user-theme", theme)
      this.userTheme = theme
      document.documentElement.className = theme
    },

    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
      if (hasDarkPreference) {
        return "dark-theme"
      } else {
        return "light-theme"
      }
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.switch-checkbox {
  display: none;
}

.switch-label {
  align-items: center;
  /* background: var(--text-primary-color); */
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  height: calc(1em * 0.35);
  position: relative;
  padding: calc(1em * 0.1);
  /* transition: all 0.2s ease-in-out; */
  /* justify-content: space-between; */
  width: 100%;
  z-index: 1;
}
</style>
