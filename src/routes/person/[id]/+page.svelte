<script>
	export let data;
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import { getAge } from '../../../lib/utils/getAge.js';
</script>

<svelte:head>
	<title>MovieDB: {data.personDetails.name}</title>
</svelte:head>

<div
	class="my-1 mx-[20%]"
	in:scale={{ y: 50, duration: 700, delay: 700 }}
	out:slide={{ duration: 400 }}
>
	<div class="w-full">
		{#if data.personDetails.profile_path === null}
			<img
				class="w-1 rounded-2xl"
				src="https://via.placeholder.com/1280x720?text=No+Image"
				alt={data.personDetails.name}
			/>
		{:else}
			<img
				class="w-72 rounded-2xl"
				src={'https://image.tmdb.org/t/p/original' + data.personDetails.profile_path}
				alt={data.personDetails.name}
			/>
		{/if}
	</div>
	<div class="txt-container">
		<div class="principal-text">
			<h1 class="py-4 px-0 font-satoshi font-bold text-2xl">{data.personDetails.name}</h1>
		</div>
		{#if data.personDetails.biography === ''}
			<p class="py-4 px-0 font-switzer font-semibold">No biography available.</p>
		{:else}
			<p class="py-4 px-0 font-switzer font-semibold">{data.personDetails.biography}</p>
		{/if}
		<p class="py-4 px-0 font-switzer font-semibold">
			<span class="font-bold">Birthday:</span>
			{#if data.personDetails.birthday === null}
				Unknown
			{:else}
				{data.personDetails.birthday + ' (' + getAge(data.personDetails.birthday) + ' years)'}
			{/if} <br />
			<span class="font-bold">Place of Birth:</span>
			{#if data.personDetails.place_of_birth === null}
				Unknown
			{:else}
				{data.personDetails.place_of_birth}
			{/if}
			{#if data.personDetails.deathday !== null}
				<br />
				<span class="font-bold">Deathday:</span>
				{data.personDetails.deathday}
			{/if} <br />
			<span class="font-bold">Known For:</span>
			{#if data.personDetails.known_for_department === null}
				Unknown
			{:else}
				{data.personDetails.known_for_department}
			{/if} <br />
			<a href="/person/{data.personDetails.id}/movies">
				<button
					class="flex items-center px-4 py-2 font-medium tracking-wid capitalize transition-all duration-900 transform rounded-lg hover:bg-gray-200 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 dark:bg-gray-700 dark:hover:bg-gray-800 bg-[#f9fafb] border dark:border-transparent text-[#111827] dark:text-white mt-3"
				>
					<svg style="width:24px;height:24px" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M18 4L20 7H17L15 4H13L15 7H12L10 4H8L10 7H7L5 4H4C2.9 4 2 4.9 2 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V4H18M11.25 15.25L10 18L8.75 15.25L6 14L8.75 12.75L10 10L11.25 12.75L14 14L11.25 15.25M16.94 11.94L16 14L15.06 11.94L13 11L15.06 10.06L16 8L16.94 10.06L19 11L16.94 11.94Z"
						/>
					</svg>

					<span class="mx-1">Filmography</span>
				</button>
			</a>
		</p>
	</div>
</div>
