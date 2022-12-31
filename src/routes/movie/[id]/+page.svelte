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
				class="w-[78.5%] rounded-2xl" 
				src="https://via.placeholder.com/1280x720" 
				alt={data.movieDetails.title} />
		{:else}
			<img
				class="w-[78.5%] rounded-2xl"
				src={'https://image.tmdb.org/t/p/original' + data.movieDetails.backdrop_path}
				alt={data.movieDetails.title}
			/>
		{/if}
	</div>
	<div class="txt-container">
		<div class="principal-text">
			<h1 class="py-4 px-0 font-satoshi font-bold">{data.movieDetails.title}</h1>
			<h2 class="font-satoshi font-medium">{data.movieDetails.tagline}</h2>
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
			{:else}
				{data.movieDetails.vote_average}
			{/if} <br />
			<span class="font-bold">Runtime</span>
			{data.movieDetails.runtime} mins <br />
		</p>
	</div>
</div>

