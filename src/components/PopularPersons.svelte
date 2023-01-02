<script>
	export let data;
	import PersonCard from './PersonCard.svelte';
</script>

<h3 class="px-4 font-satoshi font-bold text-lg">Popular Persons</h3>
<div class="grid grid-cols-auto-fit-200 gap-x-4 gap-y-8 pb-8">
	{#each data.popularPersons as person}
		<PersonCard {person} />
	{/each}
</div>
