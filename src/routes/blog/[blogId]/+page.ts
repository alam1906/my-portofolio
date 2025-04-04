export const prerender = true;

export const load = async ({ fetch, params }) => {
	const productById = async (id: number) => {
		const response = await fetch(`http://localhost:4000/api/blog/${id}`);
		const result = await response.json();
		const data = result['data'];
		return data;
	};

	return {
		blog: await productById(parseInt(params.blogId))
	};
};
