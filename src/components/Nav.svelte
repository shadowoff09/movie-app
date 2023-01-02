<script>
	import ThemeSwitch from '../components/ThemeSwitch.svelte';
</script>



<!-- <div class="navbar bg-base-100 flex justify-start p-4">
  <a
		class="text-5xl font-tanker text-black dark:text-white no-underline text-center transition-colors	"
		href="/">Movie Database</a
	>
	<ThemeSwitch />
</div> -->


<div class="navbar  flex justify-start p-4">
  <a
		class="text-5xl font-tanker text-black dark:text-white no-underline text-center transition-colors btn-ghost normal-case"
		href="/">Movie Database</a
	>
	<ThemeSwitch />
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a class="font-switzer text-base font-normal focus:bg-transparent" href="/">Movies</a></li>
			<li><a class="font-switzer text-base font-normal focus:bg-transparent" href="/person">Persons</a></li>
      
    </ul>
  </div>
</div>
