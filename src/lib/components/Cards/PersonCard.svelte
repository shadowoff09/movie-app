<script>
	export let person;
</script>

{#if person.profile_path}
	<div class="flex flex-col justify-between p-4">
		<div class="hover:scale-110 transition-transform duration-200">
			<a data-sveltekit-preload-data data-sveltekit-preload-code href={'/person/' + person.id}>
				<img
					class="w-full object-cover rounded-2xl mb-4"
					src={'https://image.tmdb.org/t/p/w500' + person.profile_path}
					alt={person.name}
				/>
			</a>
		</div>
		<div class="h-[5vh]">
			<h2 class="text-sm font-satoshi font-black">{person.name}</h2>
		</div>
	</div>
{:else}
	<div class="flex flex-col justify-between p-4">
		<div class="hover:scale-110 transition-transform duration-200">
			<a data-sveltekit-preload-data data-sveltekit-preload-code href={'/person/' + person.id}>
				<img
					class="w-full object-cover rounded-2xl mb-4"
					src="https://via.placeholder.com/500x750?text=No+Image"
					alt={person.name}
				/>
			</a>
		</div>
		<div class="h-[5vh]">
			<h2 class="text-sm font-satoshi font-black">{person.name}</h2>
		</div>
	</div>
{/if}
