<script>
	import millify from 'millify';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	export let data;
</script>

<svelte:head>
	<title>MovieDB: {data.movieDetails.title}</title>
</svelte:head>

<div
	class="my-1 mx-[20%]"
	in:scale={{ y: 50, duration: 700, delay: 700 }}
	out:slide={{ duration: 400 }}
>
	<div class="w-full">
		{#if data.movieDetails.backdrop_path === null}
			<img
				class="w-[65%] rounded-2xl"
				src="https://via.placeholder.com/1280x720?text=No+Image"
				alt={data.movieDetails.title}
			/>
		{:else}
			<img
				class="w-[65%] rounded-2xl"
				src={'https://image.tmdb.org/t/p/original' + data.movieDetails.backdrop_path}
				alt={data.movieDetails.title}
			/>
		{/if}
	</div>
	<div class="txt-container">
		<div class="principal-text">
			<h1 class="py-4 px-0 font-satoshi font-bold text-2xl">{data.movieDetails.title}</h1>
			<h2 class="font-satoshi font-medium text-xl">{data.movieDetails.tagline}</h2>
		</div>

		<p class="py-4 px-0 font-switzer font-semibold">{data.movieDetails.overview}</p>
		<p class="py-4 px-0 font-switzer font-semibold">
			<span class="font-bold">Release Date</span>
			{data.movieDetails.release_date} <br />
			<span class="font-bold">Budget</span>
			{#if data.movieDetails.budget === 0}
				N/A
			{:else}
				{millify(data.movieDetails.budget)}$
			{/if} <br />
			<span class="font-bold">Revenue</span>
			{#if data.movieDetails.revenue === 0}
				N/A
			{:else}
				{millify(data.movieDetails.revenue)}$
			{/if} <br />
			<span class="font-bold">Rating</span>
			{#if data.movieDetails.vote_average === 0}
				N/A
			{:else if data.movieDetails.vote_average >= 8}
				<span class="text-green-500">{data.movieDetails.vote_average.toFixed(1)}</span>/10
			{:else if data.movieDetails.vote_average >= 6}
				<span class="text-yellow-500">{data.movieDetails.vote_average.toFixed(1)}</span>/10
			{:else if data.movieDetails.vote_average >= 4}
				<span class="text-orange-500">{data.movieDetails.vote_average.toFixed(1)}</span>/10
			{:else if data.movieDetails.vote_average >= 2}
				<span class="text-red-500">{data.movieDetails.vote_average.toFixed(1)}</span>/10
			{/if} <br />
			<span class="font-bold">Runtime</span>
			{data.movieDetails.runtime} mins <br />
		</p>
		<a href="/movie/{data.movieDetails.id}/cast">
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
		
	</div>
</div>
