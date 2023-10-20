<script>
	import { fly } from 'svelte/transition';
	import '../../../app.css';
	import TopRatedTvShows from '$lib/components/TopRated/TopRatedTVShows.svelte';
	import SearchTvShows from '$lib/components/Search/SearchTVShows.svelte';

	export let data;
</script>

<svelte:head>
	<title>MovieDB: Top Rated TV Shows</title>
</svelte:head>

<section in:fly={{ y: 50, duration: 400, delay: 400 }} out:fly={{ duration: 400 }}>
	<SearchTvShows />
	<TopRatedTvShows {data} />
</section>
