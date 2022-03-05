import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import { setupLayouts } from "virtual:generated-layouts"
import generatedRoutes from "virtual:generated-pages"
// import routes from "pages-generated"
import { createPinia } from "pinia"
import { createHead } from "@vueuse/head"
import "./assets/styles/index.css"

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})
createApp(App).use(router).use(createPinia()).use(createHead()).mount("#app")
