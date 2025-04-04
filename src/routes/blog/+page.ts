import { blogs } from '$lib/data/data.js';

export const prerender = true;

export const load = async ({}) => {
	const getAllBlog = async () => {
		const response = blogs;

		console.log('Dijalankan ulang');
		return response;
	};
	return {
		blog: await getAllBlog()
	};
};
