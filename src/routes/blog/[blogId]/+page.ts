export const prerender = true;
import { blogs } from '../../../lib/data/data';
export const load = async ({ params }) => {
	const productById = () => {
		const response = blogs.find((p) => p.id === parseInt(params.blogId));
		return response;
	};

	return {
		blog: productById()
	};
};
