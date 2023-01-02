import 'dotenv/config';

export const load = async ({ params }) => {
	const fetchMovieDetails = async () => {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
		);
		const data = await res.json();
		return data;
	};

	return {
		movieDetails: fetchMovieDetails(),
		params: params
	};
};
