export const prerender = true;

let test: any[] = [];

export const load = async ({ fetch }) => {
	const getAllBlog = async () => {
		const response = await fetch('http://localhost:4000/api/blog');
		const result = await response.json();
		test = result['data'];
		console.log('Dijalankan ulang');
		return result['data'];
	};
	return {
		blog: test.length === 0 ? getAllBlog() : null,
		cacheBlog: test
	};
};
