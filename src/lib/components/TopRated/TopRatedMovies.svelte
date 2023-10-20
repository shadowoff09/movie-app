<script>
	export let data;
	import MovieCard from '../Cards/MovieCard.svelte';
</script>

<h3 class="px-4 font-clash font-semibold">Top Rated Movies</h3>
<div class="grid grid-cols-auto-fit-200 gap-x-4 gap-y-8 pb-8">
	{#each data.topRatedMovies as movie}
		<MovieCard {movie} />
	{/each}
</div>
