<script lang="ts">
	import { fade } from 'svelte/transition';
	import { ArrowLeft, MoveRight, MoveLeft } from '@lucide/svelte';
	import portofolios from '$lib/api/portofolio.json';
	let { data } = $props();
	let portofolio = $derived(data.portofolio);
</script>

<div in:fade={{ duration: 500 }}>
	{#key portofolio.id}
		<div class="mx-auto w-full px-10 md:w-5/6" in:fade={{ duration: 500 }}>
			<div class="flex items-center justify-between">
				<a href="/portofolio" class="mt-1 cursor-pointer font-bold"><ArrowLeft size={30} /></a>
				<div class="my-10 text-center text-3xl font-bold">{portofolio.title}</div>
				<div class="invisible"></div>
			</div>
			<div class=" whitespace-pre- text-justify">{portofolio.description}</div>
			<div class="my-10 flex items-center justify-between">
				{#if parseInt(portofolio.id) <= 1}
					<div></div>
				{:else}
					<a href={`/portofolio/${parseInt(portofolio.id) - 1}`}
						><div class="flex cursor-pointer items-center justify-start space-x-2 text-teal-500">
							<div class="mt-1"><MoveLeft /></div>
							<div>Previous</div>
						</div></a
					>
				{/if}

				{#if parseInt(portofolio.id) >= portofolios.length}{:else}
					<a
						href={`/portofolio/${parseInt(portofolio.id) + 1}`}
						class="flex cursor-pointer items-center justify-start space-x-2 text-teal-500"
					>
						<div>Next</div>
						<div class="mt-1"><MoveRight /></div>
					</a>
				{/if}
			</div>
		</div>
	{/key}
</div>
