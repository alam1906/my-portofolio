import { blogs } from '$lib/data/data.js';

export const prerender = true;

export const load = async ({}) => {
	const getAllBlog = async () => {
		const response = blogs;
		return response;
	};
	return {
		blog: await getAllBlog()
	};
};
