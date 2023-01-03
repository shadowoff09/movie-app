<script>
	import millify from 'millify';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	export let data;
</script>

<svelte:head>
	<title>MovieDB: {data.TVShowDetails.name}</title>
</svelte:head>

<div
	class="my-1 mx-[20%]"
	in:scale={{ y: 50, duration: 700, delay: 700 }}
	out:slide={{ duration: 400 }}
>
	<div class="w-full">
		{#if data.TVShowDetails.backdrop_path === null}
			<img
				class="w-[65%] rounded-2xl"
				src="https://via.placeholder.com/1280x720?text=No+Image"
				alt={data.TVShowDetails.name}
			/>
		{:else}
			<img
				class="w-[65%] rounded-2xl"
				src={'https://image.tmdb.org/t/p/original' + data.TVShowDetails.backdrop_path}
				alt={data.TVShowDetails.name}
			/>
		{/if}
	</div>
	<div class="txt-container">
		<div class="principal-text">
			<h1 class="py-4 px-0 font-satoshi font-bold text-2xl">{data.TVShowDetails.name}</h1>
			{#if data.TVShowDetails.tagline !== ''}
				<p class="py-4 px-0 font-switzer font-semibold">{data.TVShowDetails.tagline}</p>
			{/if}
		</div>

		<p class="py-4 px-0 font-switzer font-semibold">{data.TVShowDetails.overview}</p>
		<p class="py-4 px-0 font-switzer font-semibold">
			<span class="font-bold">First Air Date</span>
			{#if data.TVShowDetails.first_air_date === ''}
				N/A
			{:else}
				{data.TVShowDetails.first_air_date} <br />
			{/if}
			<span class="font-bold">Number of Seasons</span>
			{#if data.TVShowDetails.number_of_seasons === 0}
				N/A
			{:else}
				{data.TVShowDetails.number_of_seasons} <br />
			{/if}

			<span class="font-bold">Number of Episodes</span>
			{#if data.TVShowDetails.number_of_episodes === 0}
				N/A
			{:else}
				{data.TVShowDetails.number_of_episodes} <br />
			{/if}
			<span class="font-bold">Rating</span>
			{#if data.TVShowDetails.vote_average === 0}
				N/A
			{:else if data.TVShowDetails.vote_average >= 8}
				<span class="text-green-500">{data.TVShowDetails.vote_average.toFixed(1)}</span>/10
			{:else if data.TVShowDetails.vote_average >= 6}
				<span class="text-yellow-500">{data.TVShowDetails.vote_average.toFixed(1)}</span>/10
			{:else if data.TVShowDetails.vote_average >= 4}
				<span class="text-orange-500">{data.TVShowDetails.vote_average.toFixed(1)}</span>/10
			{:else if data.TVShowDetails.vote_average >= 2}
				<span class="text-red-500">{data.TVShowDetails.vote_average.toFixed(1)}</span>/10
			{/if} <br />
		</p>

		<div class="flex">
			<a href="/tv/{data.TVShowDetails.id}/cast">
				<button
					class="flex items-center px-4 py-2 font-medium tracking-wid capitalize transition-all duration-900 transform rounded-lg hover:bg-gray-200 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 
				dark:bg-gray-700 dark:hover:bg-gray-800 bg-[#f9fafb] border dark:border-transparent text-[#111827] dark:text-white"
				>
					<svg style="width:24px;height:24px" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
						/>
					</svg>

					<span class="mx-1">Cast</span>
				</button>
			</a>
			<a href="/tv/{data.TVShowDetails.id}/episodes">
				<button
					class="flex items-center px-4 py-2 font-medium tracking-wid capitalize transition-all duration-900 transform rounded-lg hover:bg-gray-200 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 
				dark:bg-gray-700 dark:hover:bg-gray-800 bg-[#f9fafb] border dark:border-transparent text-[#111827] dark:text-white ml-2"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-device-tv"
						style="width:24px;height:24px" viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<rect x="3" y="7" width="18" height="13" rx="2" />
						<polyline points="16 3 12 7 8 3" />
					</svg>

					<span class="mx-1">Episodes</span>
				</button>
			</a>
		</div>
	</div>
</div>
