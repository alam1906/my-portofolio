<script lang="ts">
	let { form } = $props();
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
</script>

<div class="mx-auto w-full max-w-6xl">
	<form
		action="?/addBlog"
		method="POST"
		use:enhance={({ formElement, formData, action, cancel, submitter }) => {
			return async ({ result, update }) => {
				console.log(result);
			};
		}}
	>
		<div class="mx-auto mt-5 mb-2 flex w-11/12 flex-col justify-items-center">
			<div>Title</div>
			<input type="text" name="title" id="title" class="w-full border-2 border-gray-400 p-3" />
		</div>
		<div class="mx-auto mb-2 flex w-11/12 flex-col justify-items-center">
			<div>Body</div>
			<textarea name="body" id="body" rows="5" class="w-full border-2 border-gray-400 p-3"
			></textarea>
		</div>
		<div class="mx-auto mb-2 flex w-11/12 flex-col justify-items-center">
			<div>Category</div>
			<input
				type="text"
				name="category"
				id="category"
				class="w-full border-2 border-gray-400 p-3"
			/>
		</div>

		<div class="w-full text-center">
			<button class=" rounded-lg bg-teal-500 px-5 py-2">Submit</button>
		</div>
	</form>

	<div>{form?.success}</div>
</div>
