<script>
  export let data;
  import EpisodeCard from './EpisodeCard.svelte';
</script>

{#if data.episodesDetails}
	<h3 class="px-4 font-satoshi font-bold text-lg">Episodes from {data.episodesDetails.title}</h3>
<div class="grid grid-cols-8 gap-x-4 gap-y-1 pb-8">
	{#each data.episodesDetails as episode}
		<EpisodeCard {episode} />
	{/each}
</div>
{/if}

