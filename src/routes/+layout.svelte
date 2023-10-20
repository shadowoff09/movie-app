<script>
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import Nav from '$lib/components/Other/Nav.svelte';
	import Footer from '$lib/components/Other/Footer.svelte';
	import '../app.css';
	
	inject({ mode: dev ? 'development' : 'production' });
</script>

<Nav />
<div class="mb-32">
	<slot />
</div>
<Footer/>