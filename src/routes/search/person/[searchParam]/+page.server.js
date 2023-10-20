import 'dotenv/config';

export const load = async ({ params }) => {
	const fetchSearchedPerson = async () => {
		const res = await fetch(
			`https://api.themoviedb.org/3/search/person?api_key=${process.env.TMDB_API_KEY}&language=en-US&query=${params.searchParam}&page=1&include_adult=true`
		);
		const data = await res.json();
		return data.results;
	};

	return {
		searchedPerson: fetchSearchedPerson(),
		params: params
	};
};
