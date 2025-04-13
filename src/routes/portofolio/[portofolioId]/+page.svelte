<script lang="ts">
	import { fade } from 'svelte/transition';

	let { data } = $props();
</script>

<div transition:fade={{ duration: 300 }}>{data.portofolio.title}</div>
