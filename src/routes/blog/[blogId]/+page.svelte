<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	let { data } = $props();
	const blog = data.blog;
</script>

<div class="-z-40 mx-auto w-full max-w-6xl px-3 md:px-8" in:fade={{ duration: 500 }}>
	<div>{blog?.body ?? 'tidak ada data'}</div>
	<div class="flex items-center justify-between">
		<div>Preveous Page</div>
		<div>Next Page</div>
	</div>
</div>
