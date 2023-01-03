<script>
	export let episode;
</script>

{#if episode.still_path}
	<div class="flex flex-col justify-between p-4">
		<div class="hover:scale-110 transition-transform duration-200">
			<a data-sveltekit-preload-data data-sveltekit-preload-code href={'/tv/episode/' + episode.id}>
				<img
					class="w-full object-cover rounded-2xl mb-4"
					src={'https://image.tmdb.org/t/p/w500' + episode.still_path}
					alt={episode.name}
				/>
			</a>
		</div>
		<div class="h-[5vh]">
			<h2 class="text-sm font-satoshi font-black">{episode.name}</h2>
			<p class="text-xs text-gray-400 font-satoshi font-black">Episode number:{episode.episode_number}</p>
		</div>
	</div>
{:else}
	<div class="flex flex-col justify-between p-4">
		<div class="hover:scale-110 transition-transform duration-200">
			<a data-sveltekit-preload-data data-sveltekit-preload-code href={'/tv/episode/' + episode.id}>
				<img
					class="w-full object-cover rounded-2xl mb-4"
					src="https://via.placeholder.com/500x750?text=No+Image"
					alt={episode.name}
				/>
			</a>
		</div>
		<div class="h-[5vh]">
			<h2 class="text-sm font-satoshi font-black">{episode.name}</h2>
			<p class="text-xs text-gray-400 font-satoshi font-black">Episode number:{episode.episode_number}</p>
		</div>
	</div>
{/if}
