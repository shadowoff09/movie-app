<script>
  export let data;
	import PersonMovies from '../../../../components/PersonMovies.svelte';
  import { fade, blur, fly, slide, scale } from 'svelte/transition';
</script>

<svelte:head>
	<title>MovieDB: Cast</title>
</svelte:head>

<section in:fly={{ y: 50, duration: 400, delay: 400 }} out:fly={{ duration: 400 }}>
	<PersonMovies {data} />
</section>
