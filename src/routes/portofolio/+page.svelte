<script>
	import { Github } from '@lucide/svelte';
	const portofolios = [
		{
			id: 1,
			title: 'Coffee Shop'
		},
		{
			id: 2,
			title: 'Presensi App'
		},
		{
			id: 3,
			title: 'POS App'
		},
		{
			id: 4,
			title: 'Course Udemy App'
		},
		{
			id: 5,
			title: 'Percasi Tasikmalaya'
		},
		{
			id: 6,
			title: 'Simple CRUD'
		},
		{
			id: 1,
			title: 'Coffee Shop'
		},
		{
			id: 2,
			title: 'Presensi App'
		},
		{
			id: 3,
			title: 'POS App'
		},
		{
			id: 4,
			title: 'Course Udemy App'
		},
		{
			id: 5,
			title: 'Percasi Tasikmalaya'
		},
		{
			id: 6,
			title: 'Simple CRUD'
		}
	];
</script>

<div class="my-5 w-full">
	<div class="mt-14 mb-14 text-center text-4xl font-bold">Portofolio</div>
	<div class="mx-3 grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-3">
		{#each portofolios as portofolio}
			<div
				class="group cursor-pointer rounded-4xl bg-white px-5 py-3 shadow-md shadow-gray-900 transition duration-500 hover:bg-gray-900 hover:shadow-2xl"
			>
				<div class="mb-3 text-center text-2xl font-semibold group-hover:text-white">
					{portofolio.title}
				</div>
				<div class="flex flex-col justify-between">
					<p
						class="line-clamp-3 text-sm text-gray-500 group-hover:text-white min-[500px]:line-clamp-4"
					>
						Going out tonight changes into the something red her mother doesn't like that kind of
						dress everything she never had she's showing off. Everything she never had she's showing
						off driving too fast moon is breaking through her hair she's heading for something that
						she want't forget
					</p>
					<div class="h-10 min-[500px]:h-12 sm:h-10"></div>
					<div class="flex items-center justify-between">
						<div
							class="flex items-start justify-start space-x-2 font-semibold text-teal-500 group-hover:text-teal-500"
						>
							<div>Check on Github</div>
							<div
								class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 group-hover:bg-white"
							>
								<Github class="h-4 w-4 group-hover:text-teal-700" />
							</div>
						</div>
						<div class="font-semibold text-teal-500 group-hover:text-teal-500">Read More</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
