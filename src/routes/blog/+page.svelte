<script lang="ts">
	import { page } from '$app/state';
	import { fade, fly } from 'svelte/transition';
	let { data } = $props();
	let blogs = $state(data.blog);
	let filter = $state('');
	function changeFilter(name: string) {
		filter = name;
	}
	function filterBlog() {
		return blogs.filter((e) => (filter === '' ? blogs : e.category === filter));
	}
	const pathName = $derived(page.url.pathname);
</script>

<div class="mx-auto w-full max-w-6xl" in:fade={{ duration: 500 }}>
	<div class="mx-auto mt-5 grid max-w-6xl grid-cols-2 gap-3 px-3 md:grid-cols-4 md:px-8">
		<button
			onclick={() => changeFilter('')}
			class="flex h-20 w-full cursor-pointer items-center justify-center rounded-sm bg-gray-200 font-semibold transition hover:-translate-y-1 hover:scale-101 hover:bg-teal-500 hover:text-white"
		>
			All
		</button>
		<button
			onclick={() => changeFilter('blog')}
			class="flex h-20 w-full cursor-pointer items-center justify-center rounded-sm bg-gray-200 font-semibold transition hover:-translate-y-1 hover:scale-101 hover:bg-teal-500 hover:text-white"
		>
			Blog
		</button>
		<button
			onclick={() => changeFilter('chess')}
			class="flex h-20 w-full cursor-pointer items-center justify-center rounded-sm bg-gray-200 font-semibold transition hover:-translate-y-1 hover:scale-101 hover:bg-teal-500 hover:text-white"
		>
			Chess
		</button>
		<button
			onclick={() => changeFilter('rubik')}
			class="flex h-20 w-full cursor-pointer items-center justify-center rounded-sm bg-gray-200 font-semibold transition hover:-translate-y-1 hover:scale-101 hover:bg-teal-500 hover:text-white"
		>
			Rubik
		</button>
	</div>
	<div class="mx-auto mt-12 max-w-6xl px-3 md:px-8">
		<div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
			{#each filterBlog() as blog}
				<div>
					<a href={pathName + '/' + blog.id} data-sveltekit-preload-data
						><div class="aspect-3/2 cursor-pointer rounded-md sm:h-72 sm:w-full">
							<div class="h-2/3 w-full bg-gray-400"></div>
							<div class="flex h-1/3 w-full flex-col items-center justify-around">
								<div class="text-center text-xl font-bold">{blog.title}</div>
								<div class="flex space-x-3">
									<div class="text-xs font-medium text-gray-700">11 Agustus 2022</div>
									<div class="text-xs font-medium text-gray-700">•</div>
									<div class="text-xs font-medium text-gray-700">
										Likes : {blog.category}
									</div>
								</div>
							</div>
						</div></a
					>
				</div>
			{/each}
		</div>
	</div>
</div>
