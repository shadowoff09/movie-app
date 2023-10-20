<script>
	export let data;

	import SearchMovies from '$lib/components/Search/SearchMovies.svelte';
	import { fly } from 'svelte/transition';

	import '../../../app.css';
	import TopRatedMovies from '$lib/components/TopRated/TopRatedMovies.svelte';
</script>

<svelte:head>
	<title>MovieDB: Top Rated Movies</title>
</svelte:head>

<section in:fly={{ y: 50, duration: 400, delay: 400 }} out:fly={{ duration: 400 }}>
	<SearchMovies />
	<TopRatedMovies {data} />
</section>
