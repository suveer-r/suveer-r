<template>
	<div class="toggleTheme">
		<input
			id="checkbox"
			type="checkbox"
			class="switch-checkbox"
			@change="toggleTheme"
		/>
		<label for="checkbox" class="switch-label">
			<span v-if="userTheme === 'light-theme'">🌑</span>
			<span v-else>☀️</span>
		</label>
	</div>
</template>

<script>
export default {
	name: "ThemeButton",
}
</script>

<script setup>
import { ref, onMounted } from "vue"

const userTheme = ref("dark-theme")

onMounted(() => {
	const initUserTheme = getMediaPreference()
	setTheme(initUserTheme)
})

// Functions
function toggleTheme() {
	const activeTheme = localStorage.getItem("user-theme")
	if (activeTheme === "light-theme") {
		setTheme("dark-theme")
	} else {
		setTheme("light-theme")
	}
}

function setTheme(theme) {
	localStorage.setItem("user-theme", theme)
	userTheme.value = theme
	document.documentElement.className = theme
}

function getMediaPreference() {
	const hasDarkPreference = window.matchMedia(
		"(prefers-color-scheme: dark)"
	).matches
	if (hasDarkPreference) {
		return "dark-theme"
	} else {
		return "light-theme"
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toggleTheme {
	position: absolute;
	top: 1.5em;
	right: 1.5em;
}

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
