<template>
	<ThemeButton />

	<router-view />
</template>

<script setup lang="ts"></script>

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

::-webkit-scrollbar {
	width: 5px;
}

::-webkit-scrollbar-track {
	background: transparent;
}

::-webkit-scrollbar-thumb {
	background: $color-primary;
	max-height: 5em;
}

body {
	margin: 0;
	overflow: hidden;
}

#app {
	color: $color-dark;
}

span {
	&.triangle {
		&::before {
			content: "</";
		}
		&::after {
			content: "/>";
		}
	}
	&.square {
		&::before {
			content: "[";
		}
		&::after {
			content: "]";
		}
	}
	&.curly {
		&::before {
			content: "{";
		}
		&::after {
			content: "}";
		}
	}
	&.htmlComment {
		&::before {
			content: "<--";
		}
		&::after {
			content: "-->";
		}
	}
	&::before,
	&::after {
		display: inline-block;
		color: $color-dark;
	}
}
</style>
