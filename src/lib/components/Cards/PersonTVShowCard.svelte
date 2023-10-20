<script>
	export let tvshow;
</script>

{#if tvshow.poster_path}
	<div class="flex flex-col justify-between p-4">
		<div class="hover:scale-110 transition-transform duration-200">
			<a data-sveltekit-preload-data data-sveltekit-preload-code href={'/tv/' + tvshow.id}>
				<img
					class="w-full object-cover rounded-2xl mb-4"
					src={'https://image.tmdb.org/t/p/w500' + tvshow.poster_path}
					alt={tvshow.name}
				/>
			</a>
		</div>
		<div class="h-[5vh]">
			<h2 class="text-sm font-satoshi font-black">{tvshow.name}</h2>
			<p class="text-xs text-gray-400 font-satoshi font-black">{tvshow.character}</p>
		</div>
	</div>
{:else}
	<div class="flex flex-col justify-between p-4">
		<div class="hover:scale-110 transition-transform duration-200">
			<a data-sveltekit-preload-data data-sveltekit-preload-code href={'/tv/' + tvshow.id}>
				<img
					class="w-full object-cover rounded-2xl mb-4"
					src="https://via.placeholder.com/500x750?text=No+Image"
					alt={tvshow.name}
				/>
			</a>
		</div>
		<div class="h-[5vh]">
			<h2 class="text-sm font-satoshi font-black">{tvshow.name}</h2>
			<p class="text-xs text-gray-400 font-satoshi font-black">{tvshow.character}</p>
		</div>
	</div>
{/if}
