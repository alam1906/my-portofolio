import type { EntryGenerator } from './$types';
import datas from '$lib/api/portofolio.json';
import { error } from '@sveltejs/kit';
export const prerender = true;

export const entries: EntryGenerator = () => {
	return datas.map((data) => ({ portofolioId: data.id }));
};

export const load = async ({ params }) => {
	const { portofolioId } = params;

	const currentIndex = datas.findIndex((p) => p.id === portofolioId);
	let portofolio = datas[currentIndex] ?? null;

	if (!portofolio) {
		throw error(404, 'Tidak ada Portofolio');
	}

	return { portofolio: portofolio };
};
