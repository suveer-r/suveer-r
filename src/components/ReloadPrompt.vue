<script setup lang="ts">
import { useRegisterSW } from "virtual:pwa-register/vue"

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW()

const close = async () => {
	offlineReady.value = false
	needRefresh.value = false
}
</script>

<template>
	<div v-if="offlineReady || needRefresh" class="pwa-toast" role="alert">
		<div class="message">
			<span v-if="offlineReady"> App ready to work offline </span>
			<span v-else>
				New content available, click on reload button to update.
			</span>
		</div>
		<button v-if="needRefresh" @click="updateServiceWorker()">Reload</button>
		<button @click="close">Close</button>
	</div>
</template>

<style>
.pwa-toast {
	position: fixed;
	right: 0;
	bottom: 0;
	margin: 10px !important;
	padding: 0 !important;
	z-index: 1;
}
.pwa-toast .message {
	margin-bottom: 8px;
}
.pwa-toast button {
	border: 1px solid currentColor;
	outline: none;
	margin-right: 5px;
	border-radius: 5px;
	padding: 3px 10px;
}
</style>
