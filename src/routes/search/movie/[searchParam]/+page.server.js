import 'dotenv/config';

export const load = async ({ params }) => {
	const fetchSearchedMovie = async () => {
		const res = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&query=${params.searchParam}&page=1&include_adult=false`
		);
		const data = await res.json();
		return data.results;
	};

	return {
		searchedMovie: fetchSearchedMovie(),
		params: params
	};
};
