<script>
	import MovieCard from '$lib/components/Cards/MovieCard.svelte';
	import { slide, scale } from 'svelte/transition';
	export let data;
</script>

<div
	class="grid grid-cols-8 gap-x-4 gap-y-8 pb-8"
	in:scale={{ y: 50, duration: 700, delay: 700 }}
	out:slide={{ duration: 400 }}
>
	{#each data.searchedMovie as movie}
		<MovieCard {movie} />
	{/each}
</div>
