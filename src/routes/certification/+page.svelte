<script lang="ts">
	import { fade } from 'svelte/transition';
	const datas = [
		{ id: 1, img: '/certificate1.avif' },
		{ id: 2, img: '/certificate2.avif' },
		{ id: 3, img: '/certificate3.avif' },
		{ id: 4, img: '/certificate4.avif' },
		{ id: 5, img: '/certificate5.avif' },
		{ id: 6, img: '/certificate6.avif' },
		{ id: 7, img: '/certificate7.avif' },
		{ id: 8, img: '/certificate8.avif' },
		{ id: 9, img: '/certificate9.avif' },
		{ id: 10, img: '/flutter-certification.avif' }
	];

	let selectedImage: string | null = null;

	function openImage(src: string) {
		selectedImage = src;
	}

	function closeImage() {
		selectedImage = null;
	}
</script>

<div class="my-5 w-full">
	<div class="my-14 text-center text-4xl font-bold">Certification</div>
	<div
		class="mx-3 grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-3"
		in:fade={{ duration: 500 }}
	>
		{#each datas as data}
			<button
				onclick={() => {
					openImage(data.img);
				}}
			>
				<img
					src={data.img}
					alt={data.img}
					class="cursor-pointer rounded-xl shadow-md shadow-gray-600 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-900"
				/>
			</button>
		{/each}
	</div>
</div>

<!-- Overlay Zoom -->
{#if selectedImage}
	<button
		class="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/80"
		onclick={closeImage}
	>
		<img
			src={selectedImage}
			alt="Zoomed"
			class="max-h-[90%] max-w-[90%] scale-100 rounded shadow-lg transition-transform duration-300"
		/>
	</button>
{/if}
