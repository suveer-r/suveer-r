import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Pages from "vite-plugin-pages"
import Components from "unplugin-vue-components/vite"
import { VitePWA } from "vite-plugin-pwa"
import Layouts from "vite-plugin-vue-layouts"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),

		Pages({
			extensions: ["vue"],
			dirs: [{ dir: resolve(__dirname, "./src/pages"), baseRoute: "" }],
			nuxtStyle: true,
			resolver: "vue",
		}),

		VitePWA({
			includeManifestIcons: true,
			minify: false,
			includeAssets: ["robots.txt", "favicon.ico", "apple-touch-icon.png"],
			registerType: "autoUpdate",
			scope: "/",
			manifest: {
				name: "Suveer Raina",
				short_name: "SR",
				description: "Suveer Raina's Portfolio",
				lang: "en",
				dir: "ltr",
				start_url: "/",
				theme_color: "#00bfa9",
				background_color: "#00a1b1",
				icons: [
					{
						src: "favicon-16x16.png",
						sizes: "16x16",
						type: "image/png",
					},
					{
						src: "favicon-32x32.png",
						sizes: "32x32",
						type: "image/png",
					},
					{
						src: "android-chrome-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "android-chrome-512x512.png",
						sizes: "512x512",
						type: "image/png",
					},
					{
						src: "android-chrome-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "any maskable",
					},
				],
			},
		}),

		Layouts({
			layoutsDirs: ["src/layouts"],
			defaultLayout: "_default",
		}),

		Components({
			/* options */
			dirs: ["src/components"],
			dts: true,
			extensions: ["vue"],
			deep: true,
			directives: true,
			include: [/\.vue$/, /\.vue\?vue/],
			exclude: [
				/[\\/]node_modules[\\/]/,
				/[\\/]\.git[\\/]/,
				/[\\/]\.nuxt[\\/]/,
			],
		}),
	],

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @import "./src/assets/styles/_variables.scss";
          @import "./src/assets/styles/_globals.scss";
          `,
			},
		},
	},
})
