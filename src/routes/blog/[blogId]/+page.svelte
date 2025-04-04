<script lang="ts">
	let { data } = $props();
	const blog = data.blog;
</script>

<div class="mx-auto w-full max-w-6xl px-3 md:px-8">
	<div>{blog.title}</div>
	<div>{blog.body}</div>
	<div>{blog.category}</div>
</div>
