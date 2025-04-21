<script>
	import { Github } from '@lucide/svelte';
	import { page } from '$app/state';
	import { fade } from 'svelte/transition';
	import data from '$lib/api/portofolio.json';
	const portofolios = data;
	const pathName = $derived(page.url.pathname);
</script>

<svelte:head>
	<meta name="portofolio" content="portofolio" />
	<meta name="description" content="This is my portofolio and project" />
	<title>Portofolio</title>
</svelte:head>
<div class="my-5 w-full">
	<div class="my-14 text-center text-4xl font-bold">Portofolio</div>
	<div
		class="mx-3 grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-3"
		in:fade={{ duration: 500 }}
	>
		{#each portofolios as portofolio}
			<div>
				<a href={pathName + '/' + portofolio.id}
					><div
						class="group cursor-pointer rounded-4xl bg-white px-5 py-3 shadow-md shadow-gray-900 transition-colors duration-500 hover:bg-gray-900 hover:shadow-2xl"
					>
						<div class="mb-3 text-center text-2xl font-semibold group-hover:text-white">
							{portofolio.title}
						</div>
						<div class="flex flex-col justify-between">
							<p
								class="line-clamp-3 text-sm text-gray-500 group-hover:text-white min-[500px]:line-clamp-4"
							>
								{portofolio.description}
							</p>
							<div class="h-10 min-[500px]:h-12 sm:h-10"></div>
							<div class="flex items-center justify-between">
								<div
									class="flex items-start justify-start space-x-2 font-semibold text-teal-700 group-hover:text-teal-700"
								>
									<div>Check on Github</div>
									<div
										class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 group-hover:bg-white"
									>
										<Github class="h-4 w-4 group-hover:text-teal-700" />
									</div>
								</div>
								<div class="font-semibold text-teal-700 group-hover:text-teal-700">Read More</div>
							</div>
						</div>
					</div></a
				>
			</div>
		{/each}
	</div>
</div>
