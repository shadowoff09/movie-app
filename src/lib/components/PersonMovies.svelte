<script>
	export let data;
	import PersonMoviesCard from './Cards/PersonMoviesCard.svelte';
	import PersonTVShowCard from './Cards/PersonTVShowCard.svelte';
</script>

<h3 class="px-4 font-satoshi font-bold text-lg">Filmography from {data.personName.name}</h3>
<div class="grid grid-cols-8 gap-x-4 gap-y-8 pb-8">
	{#each data.personMovies as movie}
		<PersonMoviesCard {movie} />
	{/each}
	{#each data.personTVShows as tvshow}
		<PersonTVShowCard {tvshow} />
	{/each}
</div>
