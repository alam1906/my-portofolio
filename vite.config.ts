import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), imagetools(), enhancedImages()],
	server: {
		host: true,
		allowedHosts: ['.ngrok-free.app']
	}
});
