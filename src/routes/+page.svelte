<script>
	export let data;
	import PopularMovies from '$lib/components/Popular/PopularMovies.svelte';
	import SearchMovies from '$lib/components/Search/SearchMovies.svelte';
	import { fly } from 'svelte/transition';

	import '../app.css';
</script>

<svelte:head>
	<title>MovieDB: Popular Movies</title>
</svelte:head>

<section in:fly={{ y: 50, duration: 400, delay: 400 }} out:fly={{ duration: 400 }}>
	<SearchMovies />
	<PopularMovies {data} />
</section>
