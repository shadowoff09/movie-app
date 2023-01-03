<script>
	export let data;
	import Cast from '../../../../components/Cast.svelte';
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>MovieDB: Cast</title>
</svelte:head>

<section in:fly={{ y: 50, duration: 400, delay: 400 }} out:fly={{ duration: 400 }}>
	<Cast {data} />
</section>

