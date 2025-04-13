<script lang="ts">
	import { fade } from 'svelte/transition';

	let { data } = $props();
	const portofolio = data.portofolio;
</script>

<div class="mx-auto w-2/3" in:fade={{ duration: 500 }}>
	<div class="my-10 text-center text-3xl font-bold">{portofolio.title}</div>
	<div class=" text-justify">{portofolio.description}</div>
	<div class="mt-5 flex items-center justify-center">
		<div
			class="flex h-10 w-40 cursor-pointer items-center justify-center rounded-lg bg-gray-900 text-center text-white"
		>
			Check on Github
		</div>
	</div>
</div>
