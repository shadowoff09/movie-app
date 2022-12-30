<script>
	import { goto } from '$app/navigation';
	let query = '';

	function submitSearch() {
		if (query) {
			goto(`/search/${query}`);
		}
	}
</script>

<form on:submit|preventDefault={submitSearch}>
	<div class="group">
		<svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
			<g>
				<path
					d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
				/>
			</g>
		</svg>
		<input bind:value={query} placeholder="Search Movies" type="search" class="input" />
	</div>
</form>

<style>
	.group {
		display: flex;
		line-height: 28px;
		align-items: center;
		position: relative;
		max-width: 190px;
		padding-left: 1rem;
	}

	.input {
		height: 40px;
		line-height: 28px;
		padding: 0 1rem;
		width: 100%;
		padding-left: 2.5rem;
		border: 1px solid #999;
		border-radius: 8px;
		outline: none;
		background-color: #fff;
		color: #0d0c22;
		transition: 0.3s ease;
	}

	.input::placeholder {
		color: #777;
	}

	.icon {
		position: absolute;
		left: 1rem;
		fill: #999;
		width: 1rem;
		height: 1rem;
		padding-left: 1rem;
	}
</style>
