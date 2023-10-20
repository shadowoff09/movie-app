<script>
	export let data;
	import PopularPersons from '$lib/components/Popular/PopularPersons.svelte';
	import SearchPersons from '$lib/components/Search/SearchPersons.svelte';
	import { fly } from 'svelte/transition';

	import '../../app.css';
</script>

<svelte:head>
	<title>MovieDB: Popular Persons</title>
</svelte:head>

<section in:fly={{ y: 50, duration: 400, delay: 400 }} out:fly={{ duration: 400 }}>
	<SearchPersons />
	<PopularPersons {data} />
</section>
