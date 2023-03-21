

<script>
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import Nav from '../components/Nav.svelte';
	import '../app.css';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<Nav />
<slot />
