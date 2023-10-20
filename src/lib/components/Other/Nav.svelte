<script>
	import ThemeSwitch from './ThemeSwitch.svelte';
</script>

<div class="navbar flex justify-start p-4">
	<a
		class="text-5xl font-tanker text-black dark:text-white no-underline text-center transition-colors btn-ghost normal-case"
		href="/">Movie Database</a
	>
	<ThemeSwitch />
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<li class="z-10">
				<a href="/" class="font-switzer text-base font-normal focus:bg-transparent">
					Movies
					<svg
						class="fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
					>
				</a>
				<ul class="p-2 bg-white dark:bg-base-100 dark:border dark:border-gray-50">
					<li><a class="focus:bg-transparent" href="/">Popular Movies</a></li>
					<li><a class="focus:bg-transparent" href="/movie/top">Top Rated Movies</a></li>
				</ul>
			</li>

			<li>
				<a href="/tv" class="font-switzer text-base font-normal focus:bg-transparent">
					TVShows
					<svg
						class="fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
					>
				</a>
				<ul class="p-2 bg-white dark:bg-base-100 dark:border dark:border-gray-50">
					<li><a class="focus:bg-transparent" href="/tv">Popular TV Shows</a></li>
					<li><a class="focus:bg-transparent" href="/tv/top">Top Rated TV Shows</a></li>
				</ul>
			</li>
			<li>
				<a class="font-switzer text-base font-normal focus:bg-transparent" href="/person">People</a>
			</li>
		</ul>
	</div>
</div>
