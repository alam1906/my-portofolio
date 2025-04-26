import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		output: {
			bundleStrategy: 'single'
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			precompress: false,
			strict: true
		})
	}
};

export default config;
