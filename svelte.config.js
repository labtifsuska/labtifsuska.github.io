import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		appDir: "app",
		paths: {
			base: process.env.NODE_ENV === "production" ? "" : "",
			assets: process.env.NODE_ENV === "production" ? "" : "",
		},
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
