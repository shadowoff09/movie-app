<script>
	export let movie;
</script>

{#if movie.poster_path}
	<div class="movie-card">
		<div class="movie-photo-card">
			<a data-sveltekit-preload-data data-sveltekit-preload-code href={'/movie/' + movie.id}>
				<img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} />
			</a>
		</div>
		<div class="description">
			<h2>{movie.title}</h2>
			<p>{movie.release_date}</p>
		</div>
	</div>
{:else}
	<div class="movie-card">
		<div class="movie-photo-card">
			<a href={'/movie/' + movie.id}>
				<img src="https://via.placeholder.com/500x750" alt={movie.title} />
			</a>
		</div>
		<div class="description">
			<h2>{movie.title}</h2>
			<p>{movie.release_date}</p>
		</div>
	</div>
{/if}

<style>
	img {
		width: 100%;
		object-fit: cover;
		border-radius: 1rem;
		margin-bottom: 1rem;
	}

	h2 {
		font-size: 0.9rem;
		font-family: 'Satoshi', sans-serif;
		font-weight: 900;
	}

	.description {
		height: 5vh;
	}

	p {
		font-size: 0.7rem;
		color: #999;
		font-family: 'Satoshi', sans-serif;
		font-weight: 900;
	}

	.movie-card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 1rem;
	}
	.movie-photo-card:hover {
		transform: scale(1.1);
	}

	.movie-photo-card {
		transition: transform 0.2s;
	}
</style>
