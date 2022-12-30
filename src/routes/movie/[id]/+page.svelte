<script>
	import millify from 'millify';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	export let data;
</script>

<svelte:head>
	<title>MovieDB: {data.movieDetails.title}</title>
</svelte:head>

<div
	class="movie-details"
	in:scale={{ y: 50, duration: 700, delay: 700 }}
	out:slide={{ duration: 400 }}
>
	<div class="img-container">
		{#if data.movieDetails.backdrop_path === null}
			<img src="https://via.placeholder.com/1280x720" alt={data.movieDetails.title} />
		{:else}
			<img
				src={'https://image.tmdb.org/t/p/original' + data.movieDetails.backdrop_path}
				alt={data.movieDetails.title}
			/>
		{/if}
	</div>
	<div class="txt-container">
		<div class="principal-text">
			<h1>{data.movieDetails.title}</h1>
			<h2>{data.movieDetails.tagline}</h2>
		</div>

		<p class="overview">{data.movieDetails.overview}</p>
		<p>
			<span>Release Date</span>
			{data.movieDetails.release_date} <br />
			<span>Budget</span>
			{#if data.movieDetails.budget === 0}
				N/A
			{:else}
				{millify(data.movieDetails.budget)}$
			{/if} <br />
			<span>Revenue</span>
			{#if data.movieDetails.revenue === 0}
				N/A
			{:else}
				{millify(data.movieDetails.revenue)}$
			{/if} <br />
			<span>Rating</span>
			{#if data.movieDetails.vote_average === 0}
				N/A
			{:else}
				{data.movieDetails.vote_average}
			{/if} <br />
			<span>Runtime</span>
			{data.movieDetails.runtime} mins <br />
		</p>
	</div>
</div>

<style>
	h1 {
		padding: 1rem 0rem 1rem;
		font-family: 'Satoshi', sans-serif;
		font-weight: 900;
	}
	h2 {
		font-family: 'Satoshi', sans-serif;
		font-weight: 500;
	}

	p {
		padding: 1rem 0rem;
		font-family: 'Switzer', sans-serif;
		font-weight: 600;
	}
	.img-container {
		width: 100%;
	}
	img {
		width: 78.5%;
		border-radius: 1rem;
	}
	.movie-details {
		margin: 2rem 20%;
	}
	span {
		font-weight: bold;
	}
</style>
