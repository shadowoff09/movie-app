<script>
	export let data;
	import TvShowCard from '../Cards/TVShowCard.svelte';
</script>

<h3 class="px-4 font-clash font-semibold">Top Rated TV Shows</h3>
<div class="grid grid-cols-auto-fit-200 gap-x-4 gap-y-8 pb-8">
	{#each data.topRatedTVShows as tvshow}
		<TvShowCard {tvshow} />
	{/each}
</div>
