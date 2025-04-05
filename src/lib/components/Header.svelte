<script lang="ts">
	import { page } from '$app/state';
	import { fly, slide } from 'svelte/transition';
	let isOpen = $state(false);
	function changeIsOpen() {
		isOpen = !isOpen;
	}
	const pathName = $derived(page.url.pathname);
	const blogId = $derived(page.params.blogId);

	const links = [
		{ name: 'About', path: '/' },
		{ name: 'Blog', path: '/blog' },
		{ name: 'Contact', path: '/contact' }
	];
</script>

<nav
	class="sticky top-0 z-50 mx-auto flex w-full max-w-6xl items-center justify-between bg-white px-3 py-3 md:px-8"
	class:shadow-md={isOpen === false}
>
	<div class="text-2xl font-semibold underline-offset-8">
		<a href="/"> My Website</a>
	</div>

	<!-- Mobile version  -->
	<button onclick={changeIsOpen} class="cursor-pointer md:hidden">
		{#if isOpen === true}
			<div>Close</div>
		{:else}
			<div>Menu</div>
		{/if}
	</button>
	{#if isOpen === true}
		<div
			in:slide={{ duration: 300 }}
			out:slide={{ duration: 300 }}
			class="absolute top-14 left-0 w-full bg-white shadow-lg md:hidden"
		>
			<ul class="space-y-2 py-4 text-center">
				{#each links as link}
					<li class="cursor-pointer hover:text-teal-500 hover:underline hover:underline-offset-8">
						<a
							href={link.path}
							class="block cursor-pointer py-3 font-medium"
							class:text-teal-500={pathName === link.path || pathName === `${link.path}/${blogId}`}
							onclick={changeIsOpen}
						>
							{link.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}

	<!-- desktop version -->
	<ul class="hidden items-center justify-center space-x-14 md:flex">
		{#each links as link}
			<li
				class=" item cursor-pointer after:bg-teal-500 hover:text-teal-500 hover:underline hover:underline-offset-8"
			>
				<a
					href={link.path}
					class="block cursor-pointer py-3 font-medium"
					class:text-teal-500={pathName === link.path || pathName === `${link.path}/${blogId}`}
				>
					{link.name}
				</a>
			</li>
		{/each}
	</ul>
</nav>
