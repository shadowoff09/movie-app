<script>
	export let data;
	import PopularTVShows from '$lib/components/Popular/PopularTVShows.svelte';
	import SearchTVShows from '$lib/components/Search/SearchTVShows.svelte';
	import { fly } from 'svelte/transition';

	import '../../app.css';
</script>

<svelte:head>
	<title>MovieDB: Popular TV Shows</title>
</svelte:head>

<section in:fly={{ y: 50, duration: 400, delay: 400 }} out:fly={{ duration: 400 }}>
	<SearchTVShows />
	<PopularTVShows {data} />
</section>
