<script>
	export let data;
	import MovieCard from '../Cards/MovieCard.svelte';
</script>

<h3 class="px-4 font-satoshi font-bold text-lg">Popular Movies</h3>
<div class="grid grid-cols-auto-fit-200 gap-x-4 gap-y-8 pb-8">
	{#each data.popularMovies as movie}
		<MovieCard {movie} />
	{/each}
</div>
