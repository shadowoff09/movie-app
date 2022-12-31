<script>
	export let data;
	import MovieCard from './MovieCard.svelte';
</script>

<h3 class="px-4 font-clash font-semibold">Popular Movies</h3>
<div class="grid grid-cols-auto-fit-200 gap-x-4 gap-y-8 pb-8">
	{#each data.popularMovies as movie}
		<MovieCard {movie} />
	{/each}
</div>
