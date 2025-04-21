<script lang="ts">
	import { Menu, X } from '@lucide/svelte';
	import { slide } from 'svelte/transition';
	import { page } from '$app/state';
	let pathName = $derived(page.url.pathname);
	let portofolioId = $derived(page.params.portofolioId);
	let isOpen: boolean = $state(false);
	function changeIsOpen() {
		isOpen = !isOpen;
	}

	const links = [
		{ path: '/', title: 'Home' },
		{ path: '/portofolio', title: 'Portofolio' },
		{ path: '/certification', title: 'Certification' }
	];
</script>

<div class="sticky top-0 z-50 w-full bg-white shadow-md">
	<div
		class="sticky top-0 z-50 mx-auto flex max-w-6xl items-center justify-between bg-white px-3 py-5 md:px-5"
	>
		<a href="/" class="cursor-pointer text-2xl font-semibold">NA</a>
		<button
			onclick={changeIsOpen}
			class="cursor-pointer md:hidden"
			aria-label="Navigation"
			title="Navigation"
			>{#if isOpen}
				<X />
			{:else}
				<Menu />
			{/if}</button
		>
		<ul class="hidden items-center font-semibold md:flex md:space-x-12">
			{#each links as link}
				<li>
					<a
						href={link.path}
						class="cursor-pointer hover:text-teal-700"
						class:text-teal-700={link.path === pathName ||
							pathName === `${link.path}/${portofolioId}`}>{link.title}</a
					>
				</li>
			{/each}
		</ul>

		{#if isOpen}
			<div
				class="absolute top-18 left-0 w-full bg-white shadow-md md:hidden"
				transition:slide={{ duration: 300 }}
			>
				<ul class="flex flex-col items-center justify-center space-y-5 py-5 font-semibold">
					{#each links as link}
						<li class=" px-3 py-1">
							<a
								onclick={changeIsOpen}
								href={link.path}
								class="cursor-pointer transition-colors duration-1000 hover:text-teal-700"
								class:text-teal-700={link.path === pathName ||
									pathName === `${link.path}/${portofolioId}`}>{link.title}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		{:else}
			<div class="hidden"></div>
		{/if}
	</div>
</div>
