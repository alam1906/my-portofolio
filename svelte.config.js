import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			precompress: false,
			strict: true,
			fallback: '404.html'
		}),
		prerender: {
			entries: ['*', '/', '/portofolio', '/certification']
		}
	}
};

export default config;
