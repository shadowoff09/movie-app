import 'dotenv/config';

export const load = async ({ params }) => {
	const fetchPersonMovies = async () => {
		const res = await fetch(
			`https://api.themoviedb.org/3/person/${params.id}/movie_credits?api_key=${process.env.TMDB_API_KEY}&language=en-US`
		);
		const data = await res.json();
		return data.cast;
	};

	const fetchPersonTVShows = async () => {
		const res = await fetch(
			`https://api.themoviedb.org/3/person/${params.id}/tv_credits?api_key=${process.env.TMDB_API_KEY}&language=en-US`
		);
		const data = await res.json();
		return data.cast;
	};

	const fetchPersonName = async () => {
		const res = await fetch(
			`https://api.themoviedb.org/3/person/${params.id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`
		);
		const data = await res.json();
		return data;
	};

	return {
		personMovies: fetchPersonMovies(),
		personTVShows: fetchPersonTVShows(),
		personName: fetchPersonName(),
		params: params
	};
};
