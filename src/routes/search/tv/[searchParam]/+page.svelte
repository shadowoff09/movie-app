<script>
	import TVShowCard from '$lib/components/Cards/TVShowCard.svelte';
	import { slide, scale } from 'svelte/transition';
	export let data;
</script>

<div
	class="grid grid-cols-8 gap-x-4 gap-y-8 pb-8"
	in:scale={{ y: 50, duration: 700, delay: 700 }}
	out:slide={{ duration: 400 }}
>
	{#each data.searchedTVShow as tvshow}
		<TVShowCard {tvshow} />
	{/each}
</div>
