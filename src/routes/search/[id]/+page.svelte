<script>
	import MovieCard from '../../../components/MovieCard.svelte';
	import { fly, fade, slide, scale } from 'svelte/transition';
	export let data;
</script>

<div
	class="searched-movies"
	in:scale={{ y: 50, duration: 700, delay: 700 }}
	out:slide={{ duration: 400 }}
>
	{#each data.searchedMovie as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	.searched-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		column-gap: 1rem;
		row-gap: 2rem;
		padding-bottom: 2rem;
	}
</style>
