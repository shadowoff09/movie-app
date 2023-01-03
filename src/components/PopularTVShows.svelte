<script>
	export let data;
	import TVShowCard from './TVShowCard.svelte';
</script>

<h3 class="px-4 font-satoshi font-bold text-lg">Popular TV Shows</h3>
<div class="grid grid-cols-auto-fit-200 gap-x-4 gap-y-8 pb-8">
	{#each data.popularTvShows as tvshow}
		<TVShowCard {tvshow} />
	{/each}
</div>