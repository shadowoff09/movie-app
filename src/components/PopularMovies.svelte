<script>
	export let data;
	import MovieCard from './MovieCard.svelte';
</script>

<h3>Popular Movies</h3>
<div class="popular-movies">
	{#each data.popularMovies as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	h3 {
		padding: 0 1rem;
		font-family: 'Clash Display', sans-serif;
		font-weight: 600;
	}
	.popular-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		column-gap: 1rem;
		row-gap: 2rem;
		padding-bottom: 2rem;
	}
</style>
