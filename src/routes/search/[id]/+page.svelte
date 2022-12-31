<script>
	import MovieCard from '../../../components/MovieCard.svelte';
	import { fly, fade, slide, scale } from 'svelte/transition';
	export let data;
</script>

<div
	class="grid grid-cols-auto-fit-200 gap-x-4 gap-y-8 pb-8"
	in:scale={{ y: 50, duration: 700, delay: 700 }}
	out:slide={{ duration: 400 }}
>
	{#each data.searchedMovie as movie}
		<MovieCard {movie} />
	{/each}
</div>


