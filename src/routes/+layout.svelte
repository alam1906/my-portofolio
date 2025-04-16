<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="">
	<Header></Header>
	<div class="mx-auto max-w-6xl">
		{@render children()}
	</div>
</div>
