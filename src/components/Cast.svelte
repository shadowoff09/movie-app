<script>
  export let data;
  import CastCard from './CastCard.svelte';
</script>

<h3 class="px-4 font-satoshi font-bold text-lg">Cast from {data.movieName}</h3>
<div class="grid grid-cols-8 gap-x-4 gap-y-1 pb-8">
	{#each data.movieCast as person}
		<CastCard {person} />
	{/each}
</div>
