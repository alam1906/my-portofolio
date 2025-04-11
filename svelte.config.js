import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),

	kit: {
		prerender: {
			entries: ['*', '/', '/portofolio', '/certification']
		},
		adapter: adapter({ fallback: 'index.html' })
	}
};

export default config;
