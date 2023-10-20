import 'dotenv/config';

export const load = async () => {
	const fetchTopRatedMovies = async () => {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
		);
		const data = await res.json();
		return data.results;
	};

	return {
		topRatedMovies: fetchTopRatedMovies()
	};
};
