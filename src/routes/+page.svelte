<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import { fly } from 'svelte/transition';
	import { Github, Instagram, Twitter, Linkedin, Facebook } from '@lucide/svelte';
</script>

<div class="h-[calc(100dvh-5rem)] w-full bg-gray-50">
	<div
		class="flex h-full flex-col items-center justify-center space-y-10 sm:pl-10 md:mx-4 md:flex-row-reverse md:items-center md:justify-center md:space-y-0 md:pl-10"
	>
		<!-- profile  -->
		<div class="flex justify-end md:w-2/3" in:fly={{ x: 200, duration: 500 }}>
			<img
				class="h-80 w-64 rounded-full md:h-[25rem] md:w-[22rem] lg:h-[30rem] lg:w-[25rem]"
				src="/profile.avif"
				alt=""
				fetchpriority="high"
			/>
		</div>

		<!-- about -->
		<div
			class="flex-col px-6 text-center md:w-full md:px-0 md:text-start"
			in:fly={{ x: -200, duration: 500 }}
		>
			<div class="text-2xl font-semibold text-gray-500 lg:text-3xl">Nur Alam</div>

			<div class="flex justify-center md:justify-start">
				<div class="hidden py-3 pr-3 text-4xl font-bold md:block lg:text-5xl">I'm</div>

				<Typewriter element={'div'} cursor={false} mode={'loop'} interval={50} unwriteInterval={50}>
					<div class="py-3 text-4xl font-bold text-teal-500 lg:text-5xl">Mobile Developer</div>
					<div class="py-3 text-4xl font-bold text-teal-500 lg:text-5xl">Web Developer</div>
					<div class="py-3 text-4xl font-bold text-teal-500 lg:text-5xl">
						BackEnd Developer
					</div></Typewriter
				>
			</div>
			<div class="my-2 text-sm text-gray-500 md:pr-10 lg:text-lg">
				I am a Front End Developer with a good understanding of Flutter and React JS framework, I
				have experience in UI design, API integration, clean code writing and knowledge of solid
				principles and clean architecture.
			</div>
			<div class="my-4 ml-1 flex justify-center space-x-5 md:justify-start">
				<a href="https://github.com/alam1906" target="_blank"
					><div
						class="flex h-7 w-7 items-center justify-center rounded-full bg-gray-800 transition-transform duration-300 hover:-translate-y-1.5 lg:h-8 lg:w-8"
					>
						<Github class=" h-4 w-4 cursor-pointer text-white  lg:h-5 lg:w-5" />
					</div></a
				>
				<a href="//" target="_blank"
					><div
						class="flex h-7 w-7 items-center justify-center rounded-full bg-gray-800 transition-transform duration-300 hover:-translate-y-1.5 lg:h-8 lg:w-8"
					>
						<Facebook class=" h-4 w-4 cursor-pointer text-white  lg:h-5 lg:w-5" />
					</div></a
				>
				<a href="//" target="_blank"
					><div
						class="flex h-7 w-7 items-center justify-center rounded-full bg-gray-800 transition-transform duration-300 hover:-translate-y-1.5 lg:h-8 lg:w-8"
					>
						<Linkedin class=" h-4 w-4 cursor-pointer text-white  lg:h-5 lg:w-5" />
					</div></a
				>
				<a href="//" target="_blank"
					><div
						class="flex h-7 w-7 items-center justify-center rounded-full bg-gray-800 transition-transform duration-300 hover:-translate-y-1.5 lg:h-8 lg:w-8"
					>
						<Twitter class=" h-4 w-4 cursor-pointer text-white  lg:h-5 lg:w-5" />
					</div></a
				>
				<a href="//" target="_blank">
					<div
						class="flex h-7 w-7 items-center justify-center rounded-full bg-gray-800 transition-transform duration-300 hover:-translate-y-1.5 lg:h-8 lg:w-8"
					>
						<Instagram class=" h-4 w-4 cursor-pointer text-white  lg:h-5 lg:w-5" />
					</div></a
				>
			</div>
			<div class=" mt-5 flex justify-center space-x-3 md:justify-start lg:space-x-5">
				<div
					class="cursor-pointer rounded-lg bg-gray-900 px-5 py-2 text-sm text-white transition-transform duration-500 hover:-translate-y-2 lg:px-9 lg:py-4"
				>
					Download CV
				</div>
				<div
					class="cursor-pointer rounded-lg border-1 border-gray-900 bg-white px-5 py-2 text-sm transition-transform duration-500 hover:-translate-y-2 lg:px-9 lg:py-4"
				>
					Contact Me
				</div>
			</div>
		</div>
	</div>
</div>
