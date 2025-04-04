import adapter from '@sveltejs/adapter-static';

async function getBlogEntries() {
	try {
		const res = await fetch(`http://localhost:4000/api/blog`); // API eksternal
		const test = await res.json();
		const blogs = test['data'];
		console.log(blogs);
		return blogs.map((blog) => `/blog/${blog.id}`); // Path absolut
	} catch (error) {
		console.error('❌ Error fetching blog entries:', error);
		return []; // Jika error, kembalikan array kosong
	}
}

const prerenderEntries = (async () => {
	const blogEntries = await getBlogEntries();
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
