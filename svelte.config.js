import adapter from '@sveltejs/adapter-static';
export const blogs = [
	{
		id: 1
	},
	{
		id: 2
	},
	{
		id: 3
	},
	{
		id: 4
	},
	{
		id: 5
	},
	{
		id: 6
	},
	{ id: 7 }
];

const prerenderEntries = (async () => {
	const blogEntries = blogs.map((e) => `/blog/${e.id}`);
	return ['/', '/contact', '/blog', ...blogEntries]; // Semua path harus absolut
})();

export default {
	kit: {
		adapter: adapter(),
		prerender: {
			entries: await prerenderEntries
		}
	}
};
