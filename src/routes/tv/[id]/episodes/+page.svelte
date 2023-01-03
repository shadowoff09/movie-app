<script>
	export let data;
	import Episodes from '../../../../components/Episodes.svelte';
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>MovieDB: Episodes</title>
</svelte:head>

<section in:fly={{ y: 50, duration: 400, delay: 400 }} out:fly={{ duration: 400 }}>
	<Episodes {data} />
</section>

