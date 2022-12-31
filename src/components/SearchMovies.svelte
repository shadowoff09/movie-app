<script>
	import { goto } from '$app/navigation';
	let query = '';

	function submitSearch() {
		if (query) {
			goto(`/search/${query}`);
		}
	}
</script>

<!-- <form on:submit|preventDefault={submitSearch}>
	<div class="flex leading-7 items-center relative max-w-xs pl-4 mb-8">
		<svg class="absolute left-4 fill-gray-600 mt-0.5 h-4 pl-4" aria-hidden="true" viewBox="0 0 24 24">
			<g>
				<path
					d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
				/>
			</g>
		</svg>
		<input class="leading-7 h-10 pl-10 pr-4 border border-solid border-gray-600 rounded-lg outline-none bg-white text-black transition duration-300 ease-in-out" bind:value={query} placeholder="Search Movies" type="search"  />
	</div>
</form>
-->

<form on:submit|preventDefault={submitSearch} class="w-96 ml-3 mb-4">
	<label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
		>Search</label
	>
	<div class="relative">
		<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
			<svg
				aria-hidden="true"
				class="w-5 h-5 text-gray-500 dark:text-gray-400"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/></svg
			>
		</div>

		<input
			type="search"
			id="default-search"
			class="block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-0 transition-all"
			autocomplete="off"
			placeholder="Search Movies"
			bind:value={query}
			required
		/>
		<button
			type="submit"
			class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all"
			>Search</button
		>
	</div>
</form>
