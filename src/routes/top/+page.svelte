<script>
	export let data;
	import TopRatedMovies from '../../components/TopRatedMovies.svelte';
	// import SearchMovies from '../components/SearchMovies.svelte';
	import { fly } from 'svelte/transition';

	import '../../app.css';
</script>

<svelte:head>
	<title>MovieDB: Top Rated Movies</title>
</svelte:head>

<section in:fly={{ y: 50, duration: 400, delay: 400 }} out:fly={{ duration: 400 }}>
	<!-- <SearchMovies /> -->
	<TopRatedMovies {data} />
</section>

